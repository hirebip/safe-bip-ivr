const Database = require('better-sqlite3');

// Create or open the database file
const db = new Database('./safe-bip.db');

// Create the responses table if it doesn't exist
db.prepare(`
  CREATE TABLE IF NOT EXISTS responses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    session_id TEXT,
    question_id INTEGER,
    answer INTEGER,
    recording_url TEXT,
    transcription TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

module.exports = db;
