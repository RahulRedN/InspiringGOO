const exp = require('express');
const router = exp.Router();

const Student_Controllers = require('../controllers/Student_c.js');

router.get('/S_Landing', Student_Controllers.StudentLandingLoadUp);
router.get('/student_profile', Student_Controllers.StudentProfile);

module.exports = router;