const {upload} = require('../../services/avatarServices')

const uploadController = async (request, response) => {
<<<<<<< Updated upstream
    console.log("privet")
    const result = await upload(request)
    response.json({status:"success", result})
=======
  const result = await upload(request)
  response.json({status: 'success', result})
>>>>>>> Stashed changes
}

module.exports = {uploadController}
