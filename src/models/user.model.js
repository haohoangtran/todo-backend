const Joi = require('joi');
const mongoose = require("mongoose")

const userJoi = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().min(6).required()
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true
    },
    password: String
});

userSchema.statics.validate = function (obj) {
    const { error, value } = userJoi.validate(obj);
    return { error, value }
}

const User = mongoose.model('User', userSchema);
module.exports = User
