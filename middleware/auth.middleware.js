const jwt = require('jsonwebtoken');
const { secret } = require('../default').jwt;

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {
        const { JWT_TOKEN_ACCESS_TYPE } = process.env;
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'Нет авторизации!' });
        }

        const { type, userId } = jwt.verify(token, secret);

        if (type !== JWT_TOKEN_ACCESS_TYPE) {
            return res.status(400).json({ message: 'Некорректный токен!' });
        }

        req.userId = userId;
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Нет авторизации!' });
    }
};
