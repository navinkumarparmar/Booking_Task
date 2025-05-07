const express = require('express');
const router = express.Router();

const { getActivities,addActivity } = require('../controllers/activityController');

router.post('/add', addActivity);
router.get('/activities', getActivities);
module.exports = router;