const { Router } = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const { updateTokens } = require('../helper/authHelper');
const User = require('../models/User');

router.post(
    '/registration',
    async (req, res) => {
        try {
            const { login, password, dateOfBirth, position, fullname } = req.body;
            const candidate = await User.findOne({ login });

            if (candidate) {
                return res.status(400).json({ message: 'Пользователь с таким логином уже существует' });
            }

            const hashedPassword = await bcrypt.hash(password, 6);
            const user = new User({
                fullname,
                login,
                password: hashedPassword,
                dateOfBirth,
                position
            });

            await user.save();

            return res.status(201).json({ message: 'Регистрация прошла успешно!' })
        } catch (e) {
            return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
        }
    });

router.post(
    '/login',
    async (req, res) => {
        try {
            const { login, password } = req.body;
            const user = await User.findOne({ login });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден!' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный логин или пароль!' });
            }

            const tokens = await updateTokens(user._id);

            return res.json({ tokens, fullname: user.fullname });
        } catch (e) {
            return res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова...' })
        }
    });

module.exports = router;