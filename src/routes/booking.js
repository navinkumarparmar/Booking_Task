const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware');
const { bookActivity, getMyBookings } = require('../controllers/bookingController');
const { body } = require('express-validator');

router.post(
    '/book',
    verifyToken, 
    [
      body('activityId').notEmpty().withMessage('Activity ID is required'),
    ],
    bookActivity
  );
router.get('/my-bookings', verifyToken, getMyBookings);

module.exports = router;
