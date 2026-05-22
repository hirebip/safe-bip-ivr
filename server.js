const express = require('express');
const app = express();

const db = require('./db');          // better-sqlite3 database
const questions = require('./questions'); // Your questions.js

app.use(express.urlencoded({ extended: true })); // For Twilio form-encoded POSTs

// Helper: find question by ID
function getQuestion(id) {
  return questions.find(q => q.id === id);
}

// Optional: simple root check
app.get('/', (req, res) => {
  res.send('SafeBIP IVR backend is running.');
});

// ------------------------------------------------------------
// 1. START OF CALL — Twilio GET /ivr/start
// ------------------------------------------------------------
app.get('/ivr/start', (req, res) => {
  const qId = req.query.q ? parseInt(req.query.q, 10) : 1;
  const q = getQuestion(qId);

  if (!q) {
    res.type('text/xml');
    return res.send(`
      <Response>
        <Say>Error: Question not found.</Say>
      </Response>
    `);
  }

  const twiml = `
    <Response>
      <Gather input="dtmf" numDigits="1" action="/ivr/save-answer?q=${q.id}">
        <Say>${q.text}</Say>
        <Say>For A, press 1. ${q.options.A}</Say>
        <Say>For B, press 2. ${q.options.B}</Say>
        <Say>For C, press 3. ${q.options.C}</Say>
        <Say>For D, press 4. ${q.options.D}</Say>
        <Say>For E, press 5. ${q.options.E}</Say>
      </Gather>
      <Say>No input received. Goodbye.</Say>
    </Response>
  `;

  res.type('text/xml');
  res.send(twiml);
});

// ------------------------------------------------------------
// 2. SAVE ANSWER (DTMF) — Twilio POST /ivr/save-answer
// ------------------------------------------------------------
app.post('/ivr/save-answer', (req, res) => {
  const digit = req.body.Digits;
  const qId = parseInt(req.query.q, 10);
  const sessionId = req.body.CallSid;

  console.log(`Answer for Q${qId} (session ${sessionId}): ${digit}`);

  // Store the numeric answer
  db.prepare(
    `INSERT INTO responses (session_id, question_id, answer) VALUES (?, ?, ?)`
  ).run(sessionId, qId, digit);

  const twiml = `
  <Response>
    <Say>Why did you answer that way? Press pound when you are finished speaking.</Say>
    <Record
      maxLength="30"
      timeout="3"
      playBeep="true"
      trim="do-not-trim"
      finishOnKey="#"
      action="https://safe-bip-ivr.onrender.com/ivr/save-why?q=${qId}"
      transcribe="true"
      transcribeCallback="https://safe-bip-ivr.onrender.com/ivr/transcription?q=${qId}"
    />
  </Response>
`;



  res.type('text/xml');
  res.send(twiml);
});

// ------------------------------------------------------------
// 3. SAVE WHY (Recording URL) — Twilio POST /ivr/save-why
// ------------------------------------------------------------
app.post('/ivr/save-why', (req, res) => {
  const qId = parseInt(req.query.q, 10);
  const sessionId = req.body.CallSid;
  const recordingUrl = req.body.RecordingUrl;

  console.log(`Why for Q${qId} (session ${sessionId}): ${recordingUrl}`);

  // Attach recording URL to the existing response row
  db.prepare(
    `UPDATE responses SET recording_url = ? WHERE session_id = ? AND question_id = ?`
  ).run(recordingUrl, sessionId, qId);

  const current = getQuestion(qId);

  // No next question → end assessment
  if (!current || !current.next) {
    const twiml = `
      <Response>
        <Say>Thank you. Your responses have been recorded, and your assessment is being evaluated.</Say>
      </Response>
    `;
    res.type('text/xml');
    return res.send(twiml);
  }

 // Otherwise → go to next question
const nextId = current.next;

const twiml = `
  <Response>
    <Redirect>https://safe-bip-ivr.onrender.com/ivr/start?q=${nextId}</Redirect>
  </Response>
`;

res.type('text/xml');
res.send(twiml);

});

// ------------------------------------------------------------
// 4. TRANSCRIPTION CALLBACK — Twilio POST /ivr/transcription
// ------------------------------------------------------------
app.post('/ivr/transcription', (req, res) => {
  const qId = parseInt(req.query.q, 10);
  const sessionId = req.body.CallSid;
  const transcription = req.body.TranscriptionText;

  console.log(`Transcription for Q${qId} (session ${sessionId}): ${transcription}`);

  db.prepare(
    `UPDATE responses SET transcription = ? WHERE session_id = ? AND question_id = ?`
  ).run(transcription, sessionId, qId);

  // Twilio doesn't need TwiML back here
  res.sendStatus(200);
});

// ------------------------------------------------------------
// SERVER START
// ------------------------------------------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`IVR server running on port ${PORT}`);
});
