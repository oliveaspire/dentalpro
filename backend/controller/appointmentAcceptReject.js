const appoinmentModel = require("../models/appoinmentModel")
const userModel = require("../models/userModel")




async function appointmentAcceptRejectByDoctor(req, res) {
   try {
    console.log("object")
    console.log(req.body,"body")
    const statusUpdate=await appoinmentModel.findOneAndUpdate({userId:req.params.id},{status:req.body.status},{new :true})
    console.log(statusUpdate,"statusUpdate")
   
    return res.json({
        success: true,
        status: 200,
        message: "Status updated successfully",
        body: statusUpdate
    })
   } catch (error) {
    console.log("error")
    console.log(error)
    return res.json({
        success: false,
        status: 400,
        message: error,
        body: {}
    })
   }
}

module.exports = appointmentAcceptRejectByDoctor