const asyncHandler = require("../../utils/asyncHandler");
const userService = require("./userService");
const apiResponse = require("../../utils/apiResponse");

const getOwnProfileController = asyncHandler(async (req, res) => 
{ 
  const user = await userService.getOwnProfileService(req.user.sub);

    res
    .status(200)
    .json(apiResponse(200, user, "User fetched successfully!"));
}
);

module.exports = { getOwnProfileController };