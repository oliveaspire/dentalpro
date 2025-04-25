const appoinmentModel = require('../models/appoinmentModel.js');
const userModel = require("../models/userModel");


const appoinmentController = async (req, res) => {
    try {
        const currentUser = req.user;
        console.log("currentUser", currentUser);


        const user = await userModel.findById(currentUser);

        const appoinmentData = {
            ...req.body,
            userId: currentUser
        };


        const uploadappoinment = new appoinmentModel(appoinmentData);
        const saveAppoinment = await uploadappoinment.save();

        res.status(201).json({
            message: "Appoinment information has been forwarded successfully",
            error: false,
            success: true,
            data: saveAppoinment
        });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
}


const allAppointment = async (req, res) => {
    try {

        const allAppointment = await appoinmentModel.find().populate("userId");

        res.json({
            message: "All User ",
            data: allAppointment,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
const allAppointmentForUser = async (req, res) => {
    try {

        const allAppointment = await appoinmentModel.find({ userId: req.user._id }).populate("userId");

        res.json({
            message: "All User ",
            data: allAppointment,
            success: true,
            error: false
        })
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}

async function singleAppointmentForAdmin(req, res) {
    try {
        const user = await appoinmentModel.findById({ _id: req.params.id }).populate("userId")

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "Appointment details"
        })

        console.log("user", user)

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
async function deleteAppointmentForAdmin(req, res) {
    try {
        const user = await appoinmentModel.deleteOne({ _id: req.params.id })

        res.status(200).json({
            data: {},
            error: false,
            success: true,
            message: "User details"
        })

        console.log("user", user)

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        })
    }
}
module.exports = { appoinmentController, allAppointment, singleAppointmentForAdmin, deleteAppointmentForAdmin, allAppointmentForUser }