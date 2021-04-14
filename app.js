require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const { mongoUri } = require('./config/default');

app.use(express.json({ extened: true }));
app.use('/', require('./routes/auth.routes'));
app.use('/incidents', require('./routes/incidents.routes'));
app.use('/refreshTokens', require('./routes/refreshTokens.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'Frontend', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

