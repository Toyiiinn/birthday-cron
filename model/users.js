const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UsersSchema = new Schema ({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birthday: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const UsersModel = mongoose.model('users', UsersSchema);

module.exports  = UsersModel;