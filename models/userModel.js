const mongoose = require("mongoose")

const User = mongoose.model("User", {
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        minLength: 8,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = User;