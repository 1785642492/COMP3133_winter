const express = require('express');
const Restaurant = require('../models/restaurantModel');
const router = express.Router();

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
