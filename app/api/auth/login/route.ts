import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Mock credentials (for demo purposes, replace with real validation logic)
const mockUser = {
    username: 'testuser',
    password: 'password123'  // Normally, passwords should be hashed
};

// POST endpoint to login and return a JWT token
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials (this should query a database in real scenarios)
    if (username === mockUser.username && password === mockUser.password) {
        // Generate JWT token
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        return res.json({ token });
    }

    return res.status(401).json({ message: 'Invalid credentials' });
});

export default router;