
const {User} = require('../../db/userModel')

<<<<<<< Updated upstream
const current = async(request, response)=>{
    const {_id} = request.user
    const user = await User.findById(_id)
    response.json({ email: user.email,
=======
const current = async (request, response)=>{
  const {_id} = request.user
  const user = await User.findById(_id)
  console.log(user)
  response.json({email: user.email,
>>>>>>> Stashed changes
    subscription: user.subscription})
}

module.exports = {current}
