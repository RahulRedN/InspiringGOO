const exp = require('express');
const router = exp.Router();

const Admin_Controllers = require('../controllers/Admin_c.js');

router.get("/", Admin_Controllers.LoginAdmin);
router.post('/', Admin_Controllers.LoginAdminPost);

router.get('/dashboard', Admin_Controllers.AdminDashboard);
router.get('/student', Admin_Controllers.AdminDashboardStudent);
router.get('/jobseeker', Admin_Controllers.AdminDashboardJobseeker);
router.get('/tutor', Admin_Controllers.AdminDashboardTutor);
router.get('/company', Admin_Controllers.AdminDashboardCompany);

module.exports = router;