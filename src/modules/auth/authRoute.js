
const express = require("express");

const authRouter = express.Router();

const { authController } = require("./authController");

const validate = require("../../middlewares/validate.middleware");

const {
  registerSchema,
  loginSchema,
  changePasswordSchema,
} = require("./authValidation");

const authMiddleware = require("../../middlewares/authenticate.middleware");

// Register
authRouter.post(
  "/register",
  validate(registerSchema),
  authController.registerController
);

// Login
authRouter.post(
  "/login",
  validate(loginSchema),
  authController.loginController
);

// Refresh
authRouter.post(
  "/refresh",
  authController.refreshController
);

// Logout
authRouter.post(
  "/logout",
  authController.logoutController
);

// Me
authRouter.get(
  "/me",
  authMiddleware,
  authController.meController
);

// Change Password
authRouter.post(
  "/changePassword",
  authMiddleware,
  validate(changePasswordSchema),
  authController.changePasswordController
);

module.exports = authRouter; 