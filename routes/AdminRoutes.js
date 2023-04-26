const exp = require('express');
const router = exp.Router();

const Admin_Controllers = require('../controllers/Admin_c.js');

router.get("/", Admin_Controllers.LoginAdmin);
router.post('/', Admin_Controllers.LoginAdminPost);

router.get('/dashboard', Admin_Controllers.AdminDashboard);
router.post('/dashboard', Admin_Controllers.AdminDashboardPost);


router.get('/student', Admin_Controllers.AdminDashboardStudent);
router.post('/student', Admin_Controllers.AdminDashboardStudentPost);


router.get('/jobseeker', Admin_Controllers.AdminDashboardJobseeker);
router.post('/jobseeker', Admin_Controllers.AdminDashboardJobseekerPost);


router.get('/tutor', Admin_Controllers.AdminDashboardTutor);
router.post('/tutor', Admin_Controllers.AdminDashboardTutorPost);

router.get('/company', Admin_Controllers.AdminDashboardCompany);
router.post('/company', Admin_Controllers.AdminDashboardCompanyPost);

module.exports = router;