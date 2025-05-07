const Booking = require('../models/Booking');
const { validationResult } = require('express-validator');
exports.bookActivity = async (req, res) => {
    try {
      const userId = req.user.id;
      const { activityId } = req.body;
  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const messages = errors.array().map(err => err.msg);
        return res.status(400).json({ errors: messages });
      }
    

      const existingBooking = await Booking.findOne({
        user: userId,
        activity: activityId,
      });
  
      if (existingBooking) {
        return res.status(400).json({
          message: 'You have already booked this activity.',
        });
      }
  
    
      const booking = await Booking.create({
        user: userId,
        activity: activityId,
      });
  
      res.status(201).json({
        message: 'Activity booked successfully',
        booking,
      });
    } catch (err) {
      res.status(400).json({ message: 'Booking failed', error: err.message });
    }
  };

  exports.getMyBookings = async (req, res) => {
    try {
      const userId = req.user.id;
  
      const bookings = await Booking.find({ user: userId })
        .populate({
          path: 'user',
          select: 'name', 
        })
        .populate({
          path: 'activity',
          select: 'title description location time',
        });
  
      res.json(bookings);
    } catch (err) {
      res.status(500).json({ message: 'Error getting bookings' });
    }
  };
  