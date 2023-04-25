const exp = require('express');
const router = exp.Router();

const Homepage_Controllers = require('../controllers/Homepage_c.js');

router.get('/',Homepage_Controllers.LandingPageLoadUp);
router.get('/Login', Homepage_Controllers.Login);
router.post('/Login', Homepage_Controllers.LoginPost);
router.get('/Logout', Homepage_Controllers.Logout);
router.get('/AboutUs', Homepage_Controllers.AboutUs);
router.get('/services', Homepage_Controllers.Services);



router.get('/studentRegister', Homepage_Controllers.StudentRegister);
router.get('/jobseekerRegister', Homepage_Controllers.JobseekerRegister);
router.get('/tutorRegister', Homepage_Controllers.TutorRegister);
router.get('/mentorRegister', Homepage_Controllers.MentorRegister);
router.get('/companyRegister', Homepage_Controllers.CompanyRegister);




router.post('/studentRegister', Homepage_Controllers.StudentRegisterPost);
router.post('/jobseekerRegister', Homepage_Controllers.JobseekerRegisterPost);
router.post('/tutorRegister', Homepage_Controllers.TutorRegisterPost);
router.post('/mentorRegister', Homepage_Controllers.MentorRegisterPost);
router.post('/companyRegister', Homepage_Controllers.CompanyRegisterPost);


router.get('/S_Landing', Homepage_Controllers.StudentLandingLoadUp);
router.get('/student_profile', Homepage_Controllers.StudentProfile);
router.post('/student_profile', Homepage_Controllers.StudentProfilePost);

router.get('/JobSeeker_Landing', Homepage_Controllers.JobseekerLandingLoadUp);


module.exports = router;