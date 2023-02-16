const {registration} = require('../../services/authService')
var gravatar = require('gravatar');

const date = Date.now()
const created = new Date(date)

const registrationController = async (request, response) => {
    const {
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
    await registration(email, password, subscr, newAvatar);
    response.status(201).json({
        "user": {
            email: email,
            subscription: subscr
          }
      })
}

module.exports = {registrationController}