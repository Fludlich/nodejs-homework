const {loginController} = require('./login.js')
const {registrationController} = require('./registration.js')
const {logout} = require('./logout.js')
const {current} = require('./current.js')
const {verifaingEmailController} = require('./verifaingEmail.js')
const {resendVerifyingEmailController} = require('./resendVerifyingEmail.js')



module.exports = {
    registrationController,
    loginController,
    logout,
    current,
    verifaingEmailController,
    resendVerifyingEmailController,
}

