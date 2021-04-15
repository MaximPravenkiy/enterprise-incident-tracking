const { Router } = require('express');
const router = Router();
const { secret } = require('../config/default').jwt;
const jwt = require('jsonwebtoken');
const Token = require('../models/Token');
const { updateTokens } = require('../helper/authHelper');

router.put(
    '/',
    async (req, res) => {
        try {
            const { refreshToken } = req.body;

            let payload = jwt.verify(refreshToken, secret);

            if (payload.type !== 'refresh') {
                return res.status(400).json({ message: 'Некорректный токен!'});
            }

            const { userId, remember } = await Token.findOne({ tokenId: payload.id });
            if (!userId) {
                return res.status(400).json({ message: 'Некорректный токен!'});
            }

            const tokens = await updateTokens(userId, remember);
            return res.json(tokens);
        } catch (e) {
            if (e instanceof jwt.TokenExpiredError) {
                return res.status(400).json({ message: 'Просроченный токен!' });
            } else if (e instanceof jwt.JsonWebTokenError) {
                return res.status(400).json({ message: 'Некорректный токен!'});
            }
        }
    }
);

module.exports = router;