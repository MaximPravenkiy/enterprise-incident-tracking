const {Router} = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const {check, validationResult} = require('express-validator');
const User = require('../models/User');
const router = Router();

router.post(
    '/registration',
    [
        check('login', 'Некорректный login')
            .isLength({min: 4}),
        check('password', 'Минимальная длина пароля 6 символов')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при регистрации'
                })
            }

            const {login, password, dateOfBirth, position, fullname} = req.body;
            const candidate = await User.findOne({login});

            if (candidate) {
                return res.status(400).json({message: 'Пользователь с таким логином уже существует'});
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({
                fullname,
                login,
                password: hashedPassword,
                dateOfBirth,
                position
            });

            await user.save();

            return res.status(201).json({message: 'Регистрация прошла успешно!'})
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    });

router.post(
    '/login',
    [
        check('login', 'Введите корректный login. Минимальная длина - 4 символа')
            .isLength({min: 4}),
        check('password', 'Минимальная длина пароля 6 символов.')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорректные данные при входе в систему!'
                })
            }

            const {login, password} = req.body;
            const user = await User.findOne({login});

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден!'});
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({message: 'Неверный логин или пароль!'});
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            );

            return res.json({token, userId: user.id, fullname: user.fullname});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова...'})
        }
    });

module.exports = router;