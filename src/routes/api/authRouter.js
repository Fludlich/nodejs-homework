const express = require("express");
const router = new express.Router();
const path = require('path');
const multer = require('multer');
<<<<<<< Updated upstream
const authMiddleware = require("../../middlewares/authMiddleware");
=======
const authMiddleware = require('../../middlewares/authMiddleware');
>>>>>>> Stashed changes
const {
  registrationController,
  loginController,
  logout,
  current,
<<<<<<< Updated upstream
  verifaingEmailController,
  resendVerifyingEmailController,
} = require("../../controllers/auth");
=======
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
>>>>>>> Stashed changes

const storage = multer.diskStorage({
    destination: (request, file, cb) =>{
        cb(null, path.resolve('./tmp'))
    },
    filename: (request, file, cb) =>{
        const [filename, extention] = file.originalname.split('.')
        cb(null, `${filename}.${extention}`)
    }
})
//const avatarDir = path.join(__dirname, "../../public/avatars")
const uploadMiddleware = multer({storage})

<<<<<<< Updated upstream
const {uploadController} = require('../../controllers/avatar/uploadAvatar');

const { controllWrapper } = require("../../helpers");
=======
router.post('/registration', controllWrapper(registrationController));
router.post('/login', controllWrapper(loginController));
router.get('/current', authMiddleware, controllWrapper(current));
router.get('/logout', authMiddleware, controllWrapper(logout));
router.get('/verify/:token', controllWrapper(verifaingEmailController));
router.post('/verify', controllWrapper(resendVerifyingEmailController));
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'),
    controllWrapper(uploadController));
>>>>>>> Stashed changes

router.post("/registration", controllWrapper(registrationController));
router.post("/login", controllWrapper(loginController));
router.get("/current", authMiddleware, controllWrapper(current));
router.get("/logout", authMiddleware, controllWrapper(logout));
router.get("/verify/:token", controllWrapper(verifaingEmailController));
router.get("/verify/", controllWrapper(resendVerifyingEmailController));
router.patch('/avatars', authMiddleware, uploadMiddleware.single('avatar'), controllWrapper(uploadController));

module.exports = { authRouter: router };
