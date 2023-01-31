
const {getContacts} = require('../../services/contactService');

const listContactsController = async (request, response) => {
  const result = await getContacts();
  response.json(result);
};

module.exports = listContactsController;
