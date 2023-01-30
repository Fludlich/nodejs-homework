const {Contact} = require('../db/postModal');
const {requestError} = require('../helpers')
const {addSchema, updateFavoriteSchema} = require('../schemas/contacts')


const getContacts = async () => {
  const result = await Contact.find({})
  return result
};

const getContactByID = async (id) => {
  const contact = await Contact.findById(id)
  if (!contact) {
    throw requestError(404, 'Not found')
  }
  return contact
};

const addContact = async ({name, email, phone}) => {
  const {error} = addSchema.validate({name, email, phone})
  if (error) {
    throw requestError(400, 'Missing fields')
  }
  const contact = new Contact({name, email, phone})
  await contact.save()
};

const updateContact = async (id, {name, email, phone}) => {
  const {error} = addSchema.validate({name, email, phone})

  if (error) {
    throw requestError(400, 'Missing fields')
  }
  const result = await Contact.findByIdAndUpdate(id,
      {$set: {name, email, phone}})
  if (!result) {
    throw requestError(404, 'Not found')
  }
  return result
};

const updateFavorite = async (id, {favorite}) => {
  const {error} = updateFavoriteSchema.validate({favorite})

  if (error) {
    throw requestError(400, 'Missing fields')
  }
  const result = await Contact.findByIdAndUpdate(id, {$set: {favorite}})
  if (!result) {
    throw requestError(404, 'Not found')
  }
  return result
};

const removeContact = async (id) => {
  const result = await Contact.findByIdAndRemove(id)
  if (!result) {
    throw requestError(404, 'Not found')
  }
};

module.exports = {
  getContacts,
  getContactByID,
  addContact,
  updateContact,
  removeContact,
  updateFavorite,

}
