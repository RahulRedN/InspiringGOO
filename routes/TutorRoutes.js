const exp = require('express');
const router = exp.Router();


const Tutor_Controller = require("../controllers/Tutor_c");

router.get('/',Tutor_Controller.TutorLanding);
router.get('/postCourse',Tutor_Controller.PostCourse);
router.get('/myCourses',Tutor_Controller.MyCourses);
router.get('/studentsEnrolled',Tutor_Controller.StudentsEnrolled);
router.post('/postCourse',Tutor_Controller.PostCoursePost);

module.exports = router;
