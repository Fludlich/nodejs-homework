const {addContact} = require('../../services/contactService')


const addContactController = async (request, response) => {
  const {
    name,
    email,
    phone,
  }=request.body

  await addContact({name, email, phone})

  response.json({status: 'success'});
};

module.exports = addContactController;
