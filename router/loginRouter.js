const express = require("express");


// Internal Imports

const {getLogin} = require("../controller/loginController");
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");

const router = express.Router();


router.get("/", decorateHtmlResponse('Login'), getLogin);


module.exports = router;