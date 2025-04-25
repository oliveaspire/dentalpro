const appoinmentModel = require("../models/appoinmentModel")
const contactUsSchema = require("../models/contactUsModel")
const userModel = require("../models/userModel")



async function countForDash(req, res) {
   try {
    const userCount=await userModel.find({role:0}).count()
    const doctorCount=await userModel.find({role:1}).count()
    const contactUs=await contactUsSchema.find().count()
    const appointments=await appoinmentModel.find().count()
    return res.json({
        success: true,
        status: 200,
        message: "here is all user",
        body: {userCount:userCount,contactUs:contactUs,appointments:appointments,doctorCount:doctorCount}
    })
   } catch (error) {
    console.log(error)
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {}
    })
   }
}

module.exports = countForDash