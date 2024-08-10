// src/controllers/orderController.js
const Order = require('../models/Order');
const Dish = require('../models/Dish');

const createOrder = async (req, res) => {
  const { dishes } = req.body;

  if (dishes && dishes.length === 0) {
    res.status(400).json({ message: 'No dishes selected' });
    return;
  }

  const order = new Order({
    user: req.user._id,
    dishes,
    totalPrice: dishes.reduce((acc, dish) => acc + dish.price * dish.quantity, 0),
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

const getOrderHistory = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('dishes.dish');
  res.json(orders);
};

module.exports = {
  createOrder,
  getOrderHistory,
};
