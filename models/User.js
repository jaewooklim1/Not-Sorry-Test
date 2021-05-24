const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

}, {
    timestamps: true
})

module.exports = User = mongoose.model('User', userSchema);