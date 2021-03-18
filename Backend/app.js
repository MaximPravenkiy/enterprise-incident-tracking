const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');
const PORT = config.get('port') || 5000;

app.use(express.json({extened: true}));
app.use('/', require('./routes/auth.routes'));
app.use('/incidents', require('./routes/incidents.routes'));

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();

