const {Router} = require('express');
const router = Router();
const {check, validationResult} = require('express-validator');
const Incident = require('../models/Incident');
const User = require('../models/User');
const auth = require('../middleware/auth.middleware');

router.get(
    '/create-incident',
    async (req, res) => {
        try {
            const users = await User.find({}, 'fullname');
            return res.json(users);
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    });

router.post(
    '/create-incident',
    [
        check('incident-name', 'Имя инцидента не должно быть короч 4 символов')
            .isLength({min: 4}),
    ],
    async (req, res) => {
        try {
            const incident = new Incident(req.body);
            await incident.save();

            return res.status(201).json({message: 'Инцидент был создан!'});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    });

router.get(
    '/',
    auth,
    async (req, res) => {
        try {
            const incidents = await Incident.find({owner: req.user.userId});

            res.json(incidents);
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    });

router.delete(
    '/delete-incident',
    async (req, res) => {
        try {
            await Incident.deleteOne({_id: req.body.id});

            return res.status(201).json({message: 'Инцидент был удалён!'});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
        }
    }
)

module.exports = router;