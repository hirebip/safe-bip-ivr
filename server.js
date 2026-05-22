const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

// 1. Start of call → send Question 1
app.post('/ivr/start', (req, res) => {
  const twiml = `
    <Response>
      <Gather input="dtmf" numDigits="1" action="/ivr/save-answer">
        <Say>Question one. The officer says your name incorrectly. Press 1 for A, 2 for B, 3 for C, 4 for D, or 5 for E.</Say>
      </Gather>
      <Say>No input received. Goodbye.</Say>
    </Response>
  `;
  res.type('text/xml');
  res.send(twiml);
});

// 2. Save the answer → ask "Why?"
app.post('/ivr/save-answer', (req, res) => {
  const digit = req.body.Digits;
  console.log("Answer:", digit);

  const twiml = `
    <Response>
      <Say>Why did you answer that way? Press pound when you are finished speaking.</Say>
      <Record maxLength="20" finishOnKey="#" action="/ivr/save-why" />
    </Response>
  `;
  res.type('text/xml');
  res.send(twiml);
});

// 3. Save the "why" recording → move to next question
app.post('/ivr/save-why', (req, res) => {
  const recordingUrl = req.body.RecordingUrl;
  console.log("Why recording:", recordingUrl);

  const twiml = `
    <Response>
      <Redirect>/ivr/start</Redirect>
    </Response>
  `;
  res.type('text/xml');
  res.send(twiml);
});

// Start server
app.listen(3000, () => console.log('IVR server running on port 3000'));
