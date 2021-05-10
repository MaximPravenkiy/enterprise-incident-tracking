require('dotenv').config({ path: '.env' });

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const { mongoURI } = require('./default');

app.use(express.json({ extended: true }));
app.use('/', require('./routes/auth.routes'));
app.use('/incidents', require('./routes/incidents.routes'));
app.use('/users', require('./routes/users.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'Frontend', 'build')));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(__dirname, 'Frontend', 'build', 'index.html')
        );
    });
}

const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        app.listen(PORT, () =>
            console.log(`App has been started on port ${PORT}...`)
        );
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
