const exp = require('express');
const router = exp.Router();

const Student_Controllers = require('../controllers/Student_c.js');


//Student landing page route
router.get('/', Student_Controllers.StudentLandingLoadUp);

//student viewprofile 
router.get('/profile', Student_Controllers.StudentProfile);

//post is to update profile in databse
router.post('/profile', Student_Controllers.StudentProfilePost);


router.get('/FAQ',Student_Controllers.FAQ);

module.exports = router;