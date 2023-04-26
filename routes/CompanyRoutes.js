const exp = require('express');
const router = exp.Router();

const Company_Controller = require('../controllers/Company_c.js')





router.get('/',Company_Controller.CompanyLanding);
router.get('/postJob',Company_Controller.PostJob);
router.post('/postJob',Company_Controller.PostJobPost);


router.get('/jobseekerWaiting',Company_Controller.JobSeekerWaiting);
router.get('/myJobs',Company_Controller.MyJobs);
router.get('/jobseekerEnrolled',Company_Controller.JobSeekerEnrolled);



module.exports = router;