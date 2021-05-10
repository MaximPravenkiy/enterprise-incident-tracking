const { Router } = require('express');
const router = Router();
const Incident = require('../models/Incident');
const auth = require('../middleware/auth.middleware');

router.post('/', async (req, res) => {
    try {
        const incident = new Incident(req.body);
        await incident.save();

        return res.status(201).json({ message: 'Инцидент был создан!' });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const filter = req.query['by-owner'] ? { owner: req.userId } : {};
        const incidents = await Incident.find(filter);

        return res.json(incidents);
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Incident.deleteOne({ _id: req.params.id });

        return res.status(201).json({ message: 'Инцидент удалён!' });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const filter = req.params.id;
        const update = req.body;

        await Incident.findByIdAndUpdate(filter, update);

        return res.status(201).json({ message: 'Инцидент обновлён!' });
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
});

module.exports = router;
