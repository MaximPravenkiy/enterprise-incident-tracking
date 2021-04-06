const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');

app.use(express.json({extened: true}));
app.use('/', require('./routes/auth.routes'));
app.use('/incidents', require('./routes/incidents.routes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('Frontend/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
    });
}

const PORT = config.get('port') || 5000;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
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
