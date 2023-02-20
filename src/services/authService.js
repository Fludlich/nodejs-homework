const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const {User} = require('../db/userModel');
const {requestError} = require('../helpers')
const {mailHandler} = require('../nodemailer/nodemailer');

const registration = async (name, email, password,
    subscription, newAvatar, verificationToken) => {
  const user = new User({name, email, password,
    subscription, newAvatar, verificationToken})
  const emailInUse = await User.findOne({email});
  if (emailInUse) {
    throw requestError(409, `Email in use`)
  }
  const registrationInf = {
    name: name,
    verificationToken: verificationToken,
    email: email,
  }
  await user.save()
  await mailHandler(registrationInf, null)
};

const login = async (email, password) => {
  const user = await User.findOne({email});
  if (!user) {
    throw requestError(401, `Email or password is wrong`)
  }
  if (! await bcrypt.compare(password, user.password)) {
    throw requestError(401, `Email or password is wrong`)
  }
  if (user.verify === false) {
    throw requestError(401, `Please verify youre email`)
  }
  const token = jsonwebtoken.sign({
    _id: user._id,
  }, process.env.JSONWEBTOKEN_SECRET)
  await User.findByIdAndUpdate(user._id, {token})
  const result = [token, user]
  return result
};

module.exports = {
  registration,
  login,
}
