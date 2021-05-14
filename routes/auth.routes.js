const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const { updateTokens } = require('../helper/auth.helper');
const User = require('../models/user');
const { secret } = require('../default').jwt;
const jwt = require('jsonwebtoken');
const Token = require('../models/token');
const salt = 6;

router.post('/registration', async (req, res) => {
    try {
        const { login, password, dateOfBirth, position, fullname } = req.body;
        const candidate = await User.findOne({ login });

        if (candidate) {
            return res.status(400).json({
                message: 'Пользователь с таким логином уже существует'
            });
        }

        const hashedPassword = await bcrypt.hash(password, salt);
        const user = new User({
            fullname,
            login,
            password: hashedPassword,
            dateOfBirth,
            position,
            oldPasswords: [hashedPassword]
        });

        await user.save();

        return res.status(201).json({ message: 'Регистрация прошла успешно!' });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { login, password, remember } = req.body;
        const user = await User.findOne({ login });

        if (!user) {
            return res
                .status(400)
                .json({ message: 'Неверный логин или пароль!' });
        }

        const { id, fullname, password: passwordInDB } = user;
        const isMatchPasswords = await bcrypt.compare(password, passwordInDB);

        if (!isMatchPasswords) {
            return res
                .status(400)
                .json({ message: 'Неверный логин или пароль!' });
        }

        const tokens = await updateTokens(id, remember, fullname);

        return res.json({ tokens });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова...' });
    }
});

router.put('/forgot-password', async (req, res) => {
    try {
        const { login, password: newPassword } = req.body;
        const user = await User.findOne({ login });

        if (!user) {
            return res.status(400).json({
                message: 'Пользователь с таким логином не существует!'
            });
        }

        const { oldPasswords, password } = user;
        const isMatchPasswords = oldPasswords.some((password) =>
            bcrypt.compareSync(newPassword, password)
        );

        if (isMatchPasswords) {
            return res.status(400).json({
                message: 'Новый пароль должен удовлетворять истории паролей!'
            });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, salt);
        const updatedOldPasswords = [...oldPasswords, hashedNewPassword];

        await User.findOneAndUpdate(
            { login },
            { password: hashedNewPassword, oldPasswords: updatedOldPasswords }
        );

        return res
            .status(201)
            .json({ message: 'Пароль был успешно обновлён!' });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова...' });
    }
});

router.put('/refresh-token', async (req, res) => {
    try {
        const { JWT_TOKEN_REFRESH_TYPE } = process.env;
        const { refreshToken } = req.body;
        const { type, id } = jwt.verify(refreshToken, secret);

        if (type !== JWT_TOKEN_REFRESH_TYPE) {
            return res.status(400).json({ message: 'Некорректный токен!' });
        }

        const { userId, remember } = await Token.findOne({ tokenId: id });

        if (!userId) {
            return res.status(400).json({ message: 'Некорректный токен!' });
        }

        const tokens = await updateTokens(userId, remember);

        return res.json(tokens);
    } catch (e) {
        if (e instanceof jwt.TokenExpiredError) {
            return res.status(400).json({ message: 'Просроченный токен!' });
        } else if (e instanceof jwt.JsonWebTokenError) {
            return res.status(400).json({ message: 'Некорректный токен!' });
        }
    }
});

module.exports = router;
