const exp = require("express");
const router = exp.Router();

const API_Controller = require("../controllers/Api_c.js");

router.get("/getMoreJobs", API_Controller.getMoreJobs);
router.get("/verify", API_Controller.verify);

router.get("/getJob", API_Controller.getJob);

router.get("/getJobSearch", API_Controller.getJobSearch);

router.get("/getMoreCourses", API_Controller.getMoreCourses);
router.get("/getCourseSearch", API_Controller.getCourseSearch);

router.get("/checkUsername", API_Controller.checkUsername);

module.exports = router;
