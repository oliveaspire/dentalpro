const express = require('express')

const router = express.Router()



const userSignUpController = require("../controller/userSignup")
const userSignInController = require('../controller/userSignIn')
const authToken = require('../middleware/authToken')


const { userDetailsController, singleUserForAdmin, deleteUserForAdmin } = require('../controller/userDetails')

const userLogout = require('../controller/userLogout')
const allUsers = require('../controller/allUsers')
const updateUser = require('../controller/updateUser')
const countForDash = require('../controller/userCountForDashboard')
const middleware = require('../utilis/middleware')
const { getAllContactUs, singleGetContactUs, deleteSingleContactUs } = require('../controller/contactUsController')
const { appoinmentController, allAppointment, singleAppointmentForAdmin, deleteAppointmentForAdmin, allAppointmentForUser } = require("../controller/appoinment");
const appointmentAcceptRejectByDoctor = require('../controller/appointmentAcceptReject')


router.post("/signup", userSignUpController)
router.post("/signin", userSignInController)
router.post("/appoinmentController", middleware, appoinmentController)
router.get("/allAppointmentForUser", middleware, allAppointmentForUser)

router.get("/user-details", userDetailsController)
router.put("/appointmentAcceptRejectByDoctor/:id", middleware, appointmentAcceptRejectByDoctor)
router.get("/userLogout", userLogout)


//admin panel 
router.get("/countForDash", middleware, countForDash)
router.get("/allUsers", middleware, allUsers)
router.get("/allAppointment", middleware, allAppointment)
router.get("/getAllContactUs", middleware, getAllContactUs)
router.get("/singleUserForAdmin/:id", middleware, singleUserForAdmin)
router.get("/singleAppointmentForAdmin/:id", middleware, singleAppointmentForAdmin)
router.get("/singleGetContactUs/:id", middleware, singleGetContactUs)
router.delete("/deleteUserForAdmin/:id", middleware, deleteUserForAdmin)
router.delete("/deleteSingleContactUs/:id", middleware, deleteSingleContactUs)
router.delete("/deleteAppointmentForAdmin/:id", middleware, deleteAppointmentForAdmin)


module.exports = router