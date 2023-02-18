const {requestError} = require('../../helpers')
const {nanoid} = require("nanoid")
const { User } = require("../../db/userModel")
const {mailHandler} = require("../../nodemailer/nodemailer");

const resendVerifyingEmailController = async(request, response)=>{
    const {
        name,
        email,
        password,
    } = request.body
    const verificationToken = nanoid()
    const user = await User.findOne({email});
    if(!user){
        throw requestError(401, `Email or password is wrong`)
    }
    if(!user.password === password){
        throw requestError(401, `Email or password is wrong`)
    }
    await mailHandler(registrationInf, null)
    // let verificationToken = request.params.token
    // const user = await User.findOne({verificationToken});
    // if(!user){
    //     throw requestError(404, `User not found`)
    // }
    // const verify = true
    // verificationToken = null
    // await User.findByIdAndUpdate(user._id, {verify, verificationToken})
    response.status(200).json({message: "Verification email sent"})

}

module.exports = {resendVerifyingEmailController}