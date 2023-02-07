const {registration} = require('../../services/authService')

const registrationController = async (request, response) => {
    const {
        email,
        password,
        subscription,
    } = request.body
    const subscr = subscription ? subscription : "starter"
    await registration(email, password, subscr);
    response.status(201).json({
        "user": {
            email: email,
            subscription: subscr
          }
      })
}

module.exports = {registrationController}