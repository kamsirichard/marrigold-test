const express = require('express');
const router = express.Router();

// Sample route for menu items
router.get('/', (req, res) => {
  res.send('Menu items will be listed here');
});

module.exports = router;
