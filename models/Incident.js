const {Schema, model} = require('mongoose');
const schema = new Schema({
    incidentName: {type: String, required:  true},
    assignee: {type: String},
    area: {type: String, required: true},
    startDate: {type: Date, required: true},
    dueDate: {type: Date, required: true},
    description: {type: String, required: true},
    priority: {type: String, required: true},
    status: {type: String, required: true},
    owner: {type: String}
});

module.exports = model('Incident', schema);
