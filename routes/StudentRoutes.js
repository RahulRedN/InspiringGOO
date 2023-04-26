const exp = require('express');
const router = exp.Router();

const Student_Controllers = require('../controllers/Student_c.js');


//Student landing page route
router.get('/', Student_Controllers.StudentLandingLoadUp);

//student viewprofile 
router.get('/profile', Student_Controllers.StudentProfile);

//student edit profile post
router.post('/profile', Student_Controllers.StudentProfilePost);

router.get('/Find_Tutor',Student_Controllers.Find_Tutor);

router.post('/Find_Tutor',Student_Controllers.Find_TutorPost);   

router.get('/FAQ',Student_Controllers.FAQ);

module.exports = router;





