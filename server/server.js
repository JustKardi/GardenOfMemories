const express = require('express');
const path = require('path');

const app = express();

// Serve static files from React build
app.use(express.static(path.join(__dirname, '../client/dist')));

// For any other request, serve React's index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist/index.html'));
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
