const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define the Restaurant Schema
const restaurantSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  address: String,
  city: String,
  restaurant_id: String,
  // Include other fields as necessary
});

// Create a model from the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

// API endpoint to return all restaurants
app.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// API endpoint to return all restaurant details by cuisine
app.get('/restaurants/cuisine/:cuisineType', async (req, res) => {
  try {
    const cuisineType = req.params.cuisineType;
    const restaurants = await Restaurant.find({ cuisine: cuisineType });
    res.json(restaurants);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
