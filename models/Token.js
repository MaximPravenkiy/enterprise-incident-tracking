const { Schema, model } = require('mongoose');
const schema = new Schema({
    tokenId: { type: String, required:  true },
    userId: { type: String, required:  true },
    remember: { type: Boolean, required:  true }
});

module.exports = model('Token', schema);
