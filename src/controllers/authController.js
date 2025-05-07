const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { validationResult } = require('express-validator');

dotenv.config();

exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const messages = errors.array().map(err => err.msg); 
        return res.status(400).json({ errors: messages });
      }
      const existingUser = await User.findOne({
        $or: [{ email }, { phone }]
      });
  
      if (existingUser) {
        return res.status(400).json({
          message: 'Email or phone number already registered'
        });
      }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, phone, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error in registration', error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'Login failed', error: err.message });
  }
};
