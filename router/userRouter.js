const express = require("express");


// Internal Imports

const {getUsers} = require("../controller/userController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();


router.get("/", decorateHtmlResponse('Users'), getUsers);


module.exports = router;