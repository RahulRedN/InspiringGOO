const exp = require("express");
const router = exp.Router();

const API_Controller = require("../controllers/Api_c.js");

router.get("/getMoreJobs", API_Controller.getMoreJobs);

module.exports = router;
