const {upload} = require('../../services/avatarServices')

const uploadController = async (request, response) => {
    console.log("privet")
    const result = await upload(request)
    response.json({status:"success", result})
}

module.exports = {uploadController}