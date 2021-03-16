const {Schema, model, Types} = require('mongoose');
const schema = new Schema({
    login: {type: String, required:  true, unique: true},
    password: {type: String, required: true},
    dateOfBirth: {type: Date, required: true},
    position: {type: String, required: true},
    incidents: [{type: Types.ObjectId, ref: 'Incident'}]
});

module.exports = model('User', schema);

