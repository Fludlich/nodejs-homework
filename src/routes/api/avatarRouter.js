const express = require('express');
const multer = require('multer');
const path = require('path');
const router = new express.Router();

const avatarDir = path.join(__dirname, "../../public/avatars")

const storage = multer.diskStorage({
    destination: (request, file, cb) =>{
        cb(null, path.resolve('./tmp'))
    },
    filename: (request, file, cb) =>{
        const [filename, extention] = file.originalname.split('.')
        cb(null, `${filename}.${extention}`)
    }
})

const uploadMiddleware = multer({storage})


const {uploadController} = require('../../controllers/avatar/uploadAvatar');

const {controllWrapper} = require('../../helpers');
const authMiddleware = require('../../middlewares/authMiddleware');


router.patch('/', authMiddleware, uploadMiddleware.single('avatar'), controllWrapper(uploadController));
router.use('/', express.static(avatarDir));


module.exports = {avatarRouter: router};
