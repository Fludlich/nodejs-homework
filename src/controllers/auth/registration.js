const {registration} = require('../../services/authService')
<<<<<<< Updated upstream
var gravatar = require('gravatar');
const {mailHandler} = require("../../nodemailer/nodemailer");
const {nanoid} = require("nanoid")
=======
const gravatar = require('gravatar');
const {nanoid} = require('nanoid')

>>>>>>> Stashed changes
const date = Date.now()
const created = new Date(date)



const registrationController = async (request, response) => {
<<<<<<< Updated upstream
    const {
        name,
        email,
        password,
        subscription,
    } = request.body
    const subscr = subscription ? subscription : "starter"
    const newAvatar = {
        id: 1,
        avatarUrl: gravatar.url(email, {s: '100', r: 'x', d: 'retro'}, true),
        created: created,
    }
    const verificationToken = nanoid()
    await registration(email, password, subscr, newAvatar, verificationToken);
    const registrationInf = {name, token: verificationToken}
    await mailHandler(registrationInf, null)
    response.status(201).json({
        "user": {
            email: email,
            subscription: subscr
          }
      })
=======
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
      name,
      email,
      password,
      subscr,
      newAvatar,
      verificationToken);
  response.status(201).json({
    'user': {
      email: email,
      subscription: subscr,
    },
  })
>>>>>>> Stashed changes
}

module.exports = {registrationController}
