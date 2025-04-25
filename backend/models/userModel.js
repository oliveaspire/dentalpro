const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true,
        required: true

    },
    password: String,
    role: { type: Number, enum: [0, 1, 2], default: 0 },
    status: { type: Number, enum: [0, 1, 2], default: 0 },
    phoneNumber: Number,
    token: String,
    loginTime: Number,
    isAdmin: { type: Number, default: 0 },
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema)

module.exports = userModel