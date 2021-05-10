const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find({}, 'fullname');

        return res.json(users);
    } catch (e) {
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так, попробуйте снова.' });
    }
});

module.exports = router;
