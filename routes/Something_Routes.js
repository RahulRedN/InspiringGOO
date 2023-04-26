const exp = require('express');
const router = exp.Router();

const Something_Controllers = require('../controllers/Something_c.js');

router.get('/', Something_Controllers.FAQ);

module.exports = router;