const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../middlewares/auth');


// User-specific routes
router.use(protect); // Protect all routes

router.get('/profile', (req, res) => {
  // User profile logic
});

router.post('/order', (req, res) => {
  // Create order logic
});

module.exports = router;
