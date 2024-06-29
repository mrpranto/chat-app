const express = require("express");
const {check} = require("express-validator");

// Internal Imports

const {getUsers, addUser} = require("../controller/userController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");
const {addUserValidators, addUserValidationHandler} = require("../middleware/users/userValidators");

const router = express.Router();


router.get("/", decorateHtmlResponse('Users'), getUsers);

router.post("/", avatarUpload, addUserValidators, addUserValidationHandler, addUser);


module.exports = router;