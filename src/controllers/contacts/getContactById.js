const {getContactByID} = require('../../services/contactService')

const getContactByIDController = async (request, response) => {
  const {id} = request.params

  const contact = await getContactByID(id)

  response.json(contact)
};

module.exports = getContactByIDController
