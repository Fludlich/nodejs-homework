
const { User } = require("../../db/userModel")

const current = async(request, response)=>{
    const {_id} = request.user
    const user = await User.findById(_id)
    console.log(user)
    response.json({ email: user.email,
    subscription: user.subscription})
}

module.exports = {current}