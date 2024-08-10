// src/routes/orderRoutes.js
const express = require('express');
const { createOrder, getOrderHistory } = require('../controllers/orderController');
const protect = require('../middlewares/auth');
const router = express.Router();

router.post('/', protect, createOrder);
router.get('/history', protect, getOrderHistory);

module.exports = router;
