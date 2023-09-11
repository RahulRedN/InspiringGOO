const exp = require("express");
const router = exp.Router();

const API_Controller = require("../controllers/Api_c.js");
const { route } = require("./AdminRoutes.js");

router.get("/getMoreJobs", API_Controller.getMoreJobs);
router.get("/verify",API_Controller.verify);

module.exports = router;
