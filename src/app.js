const express = require('express');
const app = express();

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = app;
