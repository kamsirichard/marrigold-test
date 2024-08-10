const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/auth');

// Apply protect middleware to all routes
router.use(protect);

// Admin-specific routes
router.get('/dashboard', restrictTo('admin'), (req, res) => {
  // Admin dashboard logic
  res.json({ message: 'Admin dashboard' });
});

router.get('/users', restrictTo('admin'), (req, res) => {
  // Admin user management logic
  res.json({ message: 'User management' });
});

module.exports = router;
