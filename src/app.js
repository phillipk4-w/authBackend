import express from 'express';
import path from 'path';
import router from './routes/authRoutes.js'


const app = express();

// Middleware for parsing JSON and urlencoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve('public')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/auth', router);

export default app;