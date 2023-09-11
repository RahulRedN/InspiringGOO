const exp = require("express");
const router = exp.Router();

const API_Controller = require("../controllers/Api_c.js");

router.get("/getMoreJobs", API_Controller.getMoreJobs);

router.get("/getJob", API_Controller.getJob);

router.get("/getJobSearch", API_Controller.getJobSearch);

router.get("/getMoreCourses", API_Controller.getMoreCourses);

module.exports = router;