const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');
const jwtTokenSign = require("../utilis/jwtToken");


async function userSignUpController(req, res) {

    try {
        const validationU = await userModel.findOne({ email: req.body.email })
        if (validationU !== null) {
            return res.json({
                success: false,
                status: 400,
                message: "Email already exist",
                body: {}
            })
        } else {
            if (!req.body.email) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide email",
                    body: {}
                })
            }
            if (!req.body.password) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide password",
                    body: {}
                })
            }
            if (!req.body.firstname) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide firstname",
                    body: {}
                })
            }
            if (!req.body.lastname) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide lastname",
                    body: {}
                })
            }
            if (!req.body.phoneNumber) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide phoneNumber",
                    body: {}
                })
            }
            if (!req.body.role) {
                return res.json({
                    success: false,
                    status: 400,
                    message: "Please provide role",
                    body: {}
                })
            }

            const passwordEncrypt = await bcrypt.hash(req.body.password, 10)
            const data = await userModel.create({ ...req.body, password: passwordEncrypt, })
            const tokenData = await jwtTokenSign({ _id: data._id })
            data.token = tokenData.token
            data.loginTime = tokenData.decoded.iat
            res.json({
                success: true,
                status: 200,
                message: "User created succesfully",
                body: data
            })
        }
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

module.exports = userSignUpController