const {Router} = require('express');
const router = Router();
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
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    });

router.post(
    '/create-incident',
    async (req, res) => {
        try {
            const incident = new Incident(req.body);
            await incident.save();

            return res.status(201).json({message: 'Инцидент был создан!'});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    });

router.get(
    '/my-incidents',
    auth,
    async (req, res) => {
        try {
            const incidents = await Incident.find({owner: req.user.userId});

            return res.json(incidents);
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    });

router.get(
    '/all-incidents',
    async (req, res) => {
        try {
            const incidents = await Incident.find();

            return res.json(incidents);
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    });

router.delete(
    '/delete-incident',
    async (req, res) => {
        try {
            await Incident.deleteOne({_id: req.body.incidentID});

            return res.status(201).json({message: 'Инцидент удалён!'});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    }
)

router.put(
    '/update-incident',
    async (req, res) => {
        try {
            const filter =  req.body.incidentID;
            const update =  req.body.incidentFormData;

            await Incident.findByIdAndUpdate(filter, update);

            return res.status(201).json({message: 'Инцидент обновлён!'});
        } catch (e) {
            return res.status(500).json({message: 'Что-то пошло не так, попробуйте снова.'})
        }
    }
)

module.exports = router;