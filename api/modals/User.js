const mongoose = require('mongoose');
const { model } = mongoose;

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 4,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const UserModal = model('User', UserSchema);

module.exports = UserModal;
