const express = require("express");
const router = new express.Router();
const path = require('path');
const multer = require('multer');
const controllWrapper = require('../../helpers/controllWrapper');
const authMiddleware = require('../../middlewares/authMiddleware');
const {
  registrationController,
  loginController,
  logout,
  current,
} = require('../../controllers/auth');
const {
  verifaingEmailController,
  resendVerifyingEmailController,
} = require('../../controllers/verifyMail');

const storage = multer.diskStorage({
  destination: (request, file, cb) =>{
    cb(null, path.resolve('./tmp'))
  },
  filename: (request, file, cb) =>{
    const [filename, extention] = file.originalname.split('.')
    cb(null, `${filename}.${extention}`)
  },
})

const uploadMiddleware = multer({storage})

const {uploadController} = require('../../controllers/avatar/uploadAvatar');

router.post('/registration', controllWrapper(registrationController));
router.post('/login', controllWrapper(loginController));
router.get('/current', authMiddleware, controllWrapper(current));
router.get('/logout', authMiddleware, controllWrapper(logout));
router.get('/verify/:token', controllWrapper(verifaingEmailController));
router.post('/verify', controllWrapper(resendVerifyingEmailController));
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'),
    controllWrapper(uploadController));


module.exports = { authRouter: router };
