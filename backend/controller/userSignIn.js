const bcrypt = require('bcryptjs')
const userModel = require('../models/userModel')
const jwt = require('jsonwebtoken');
const jwtTokenSign = require('../utilis/jwtToken');

async function userSignInController(req,res){
    try {
        const findEmail = await userModel.findOne({ email: req.body.email, })
        if (findEmail == null) {
            res.json({
                success: false,
                status: 400,
                message: "Email or password is not correct",
                body: {}
            })
        } else {
            const passwordVerify = await bcrypt.compare(req.body.password, findEmail.password)
            if (passwordVerify == false) {
                res.json({
                    success: false,
                    status: 400,
                    message: "Email or password is not correct",
                    body: {}
                })
            } else {
                const data = await userModel.findOne({ email: req.body.email })
                const tokenUpdate = await jwtTokenSign(data._id)
                data.token = tokenUpdate.token
                data.loginTime = tokenUpdate.decoded.iat
                res.json({
                    success: true,
                    status: 200,
                    message: "Login successfully",
                    body: data
                })
            }
        }
    } catch (error) {
        res.json({
            success: false,
            status: 400,
            message: "error",
            body: {}
        })
    }

}

module.exports = userSignInController