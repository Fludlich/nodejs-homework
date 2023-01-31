const {removeContact} = require('../../services/contactService')

const removeContactController = async (request, response) => {
  const {id} = request.params

  await removeContact(id)

  response.status(200).json({
    message: 'Contact deleted',
  })
};

module.exports = removeContactController
