import express from 'express';
import app from './app.js';

const server = express();
const PORT = process.env.PORT || 5000;

server.use(app);  // Use the app.js file's routes and settings

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

