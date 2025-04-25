const mongoose = require('mongoose')

const appoinSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    fullname: String,
    phone: String,
    treatment: String,
    status: { type: Number, enum: [0, 1, 2], default: 0 },
    message: String,
    createdAt: { type: Date, default: Date.now }
}, {
    timestamps: true
})

const appoinmentModel = mongoose.model("Appoinments", appoinSchema)

module.exports = appoinmentModel
