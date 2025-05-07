const Activity = require('../models/Activity');

exports.getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
  
    return res.status(200).json({
        message: "succesfully get activities",
        data: activities
    })
 
  } catch (err) {
    res.status(500).json({ message: 'Error fetching activities' });
  }
};

exports.addActivity = async (req, res) => {
    try {
      const { title, description, location, date, time } = req.body;
  
      const activity = new Activity({
        title,
        description,
        location,
        date,
        time,
      });
  
      const saved = await activity.save();
      res.status(201).json({ message: 'Activity added successfully', activity: saved });
    } catch (err) {
      res.status(500).json({ message: 'Error adding activity' });
    }
  };