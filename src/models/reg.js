const {Schema, model} = require('mongoose');

const RegSchema = new Schema({
    ced: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tel: {
        type: String,
        required: true
    }
});

module.exports = model('regs', RegSchema,'registros');