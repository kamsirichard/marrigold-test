const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/auth');

// Apply protect middleware to all routes
router.use(protect);

// Admin2-specific routes
router.get('/orders', restrictTo('admin2'), (req, res) => {
  // Admin2 order management logic
  res.json({ message: 'Admin2 orders' });
});

router.get('/messages', restrictTo('admin2'), (req, res) => {
  // Admin2 message handling logic
  res.json({ message: 'Admin2 messages' });
});

module.exports = router;
