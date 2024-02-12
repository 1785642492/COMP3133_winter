const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User'); 

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// MongoDB Atlas connection
const atlasUri = 'mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlasUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// POST API to insert a new user document
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to the User API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
