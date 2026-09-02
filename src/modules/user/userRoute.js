const express = require("express");

const userRouter = express.Router();

const userController = require("./userController");
const authMiddleware = require("../../middlewares/authenticate.middleware");

userRouter.get("/me", authMiddleware, userController.getOwnProfileController);

module.exports = userRouter;