const app = require('./app');
const PORT = process.env.PORT || 5000;  // Default to port 3000 if no environment variable

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
