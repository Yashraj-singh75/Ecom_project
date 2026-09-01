const express = require("express");

const userRouter = express.Router();

const userController = require("./user.controller");
const authMiddleware = require("../../middlewares/authenticate.middleware");

userRouter.get("/me", authMiddleware, userController.getOwnProfileController);

module.exports = userRouter;