const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Parse JSON
app.use(express.json());

// Serve frontend folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Example API endpoint
app.post('/generate', (req, res) => {
  const { prompt } = req.body;
  // AI image generation logic goes here
  res.json({ success: true, prompt, message: "Image generated!" });
});

// Catch-all to serve index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
