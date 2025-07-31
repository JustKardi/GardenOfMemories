const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// API route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all: serve React index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
