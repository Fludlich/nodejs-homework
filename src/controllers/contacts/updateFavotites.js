const {updateFavorite} = require('../../services/contactService')


const updateFavoriteController = async (request, response) => {
  const {favorite}=request.body
  const {id} = request.params
  const result = await updateFavorite(id, {favorite})
  response.status(200).json(result)
};

module.exports = updateFavoriteController
