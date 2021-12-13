const {Schema, model} = require('mongoose');

const NoteSchema = new Schema({
    tittle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports.model('note', NoteSchema);