const exp = require('express');
const router = exp.Router();


const Tutor_Controller = require("../controllers/Tutor_c");

router.get('/',Tutor_Controller.TutorLanding);
router.get('/postCourse',Tutor_Controller.PostCourse);
router.get('/studentWaiting',Tutor_Controller.StudentsWaiting);
router.get('/myCourses',Tutor_Controller.MyCourses);
router.get('/studentsEnrolled',Tutor_Controller.StudentsEnrolled);

module.exports = router;
