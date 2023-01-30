const {updateContact} = require('../../services/contactService')


const updateByIDController = async (request, response) => {
  const {
    name,
    email,
    phone,
  }=request.body
  const {id} = request.params
  const result = await updateContact(id, {name, email, phone})
  response.status(200).json(result)
};

module.exports = updateByIDController
