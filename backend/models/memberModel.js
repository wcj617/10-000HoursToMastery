const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add a name']
    },
    email: {
        type: String,
        required: [true, 'please add a email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please add a password']
    }
},
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Member', memberSchema)