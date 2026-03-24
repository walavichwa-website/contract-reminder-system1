import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const createToken = (payload) => {
    return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};
