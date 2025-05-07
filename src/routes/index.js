const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/booking', require('./booking'));
router.use('/activity',require('./activity'))


module.exports = router;
