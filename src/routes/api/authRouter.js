const express = require("express");
const router = new express.Router();
const authMiddleware = require("../../middlewares/authMiddleware");
const {
  registrationController,
  loginController,
  logout,
  current,
  verifaingEmailController,
  resendVerifyingEmailController,
} = require("../../controllers/auth");

const { controllWrapper } = require("../../helpers");

router.post("/registration", controllWrapper(registrationController));
router.post("/login", controllWrapper(loginController));
router.get("/current", authMiddleware, controllWrapper(current));
router.get("/logout", authMiddleware, controllWrapper(logout));
router.get("/verify/:token", controllWrapper(verifaingEmailController));
router.get("/verify/", controllWrapper(resendVerifyingEmailController));

module.exports = { authRouter: router };
