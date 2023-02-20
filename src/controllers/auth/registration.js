const {registration} = require('../../services/authService')
var gravatar = require('gravatar');
const {mailHandler} = require("../../nodemailer/nodemailer");
const {nanoid} = require("nanoid")
const date = Date.now()
const created = new Date(date)



const registrationController = async (request, response) => {
  const {
    name,
    email,
    password,
    subscription,
  } = request.body
  const subscr = subscription ? subscription : 'starter'
  const newAvatar = {
    id: 1,
    avatarUrl: gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true),
    created: created,
  }
  const verificationToken = nanoid()
  await registration(
      name, email, password, subscr, newAvatar, verificationToken
      );
  response.status(201).json({
    'user': {
      email: email,
      subscription: subscr,
    },
  })
}

module.exports = {registrationController}
