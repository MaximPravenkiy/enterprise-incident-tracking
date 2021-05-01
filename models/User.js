const { Schema, model, Types } = require('mongoose');
const schema = new Schema({
    fullname: { type: String, required:  true },
    login: { type: String, required:  true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    position: { type: String, required: true },
    oldPasswords: [{ type: String }]
});

module.exports = model('User', schema);
