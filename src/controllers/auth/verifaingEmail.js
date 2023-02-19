const {requestError} = require('../../helpers')
const { User } = require("../../db/userModel")

const verifaingEmailController = async(request, response)=>{
    let verificationToken = request.params.token
    const user = await User.findOne({verificationToken});
    if(!user){
        throw requestError(404, `User not found`)
    }
    const verify = true
    verificationToken = null
    await User.findByIdAndUpdate(user._id, {verify, verificationToken})
    response.status(200).json({message: 'Verification successful'})

}

module.exports = {verifaingEmailController}