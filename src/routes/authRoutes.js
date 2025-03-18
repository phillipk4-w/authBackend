import express from 'express';
import path from 'path';

const router = express.Router();

// Correctly resolve the path to login.html
router.get('/login', (req, res) => {
    const filePath = path.resolve('public', 'login.html');
    res.sendFile(filePath);
});

router.get('/register', (req, res) => {
    const filePath = path.resolve('public', 'register.html');
    res.sendFile(filePath);
});

export default router;



