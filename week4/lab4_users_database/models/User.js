const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: { type: String, required: true, minlength: 4 },
  email: { 
    type: String, 
    required: true, 
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { 
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          return /^[a-zA-Z\s]*$/.test(v);
        },
        message: props => `${props.value} is not a valid city name!`
      }
    },
    zipcode: { 
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          return /^\d{5}-\d{4}$/.test(v);
        },
        message: props => `${props.value} is not a valid zip code format!`
      }
    },
    geo: {
      lat: String,
      lng: String
    }
  },
  phone: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^1-\d{3}-\d{3}-\d{4}$/.test(v);
      },
      message: props => `${props.value} is not a valid phone format!`
    }
  },
  website: { 
    type: String, 
    required: true,
    validate: {
      validator: function(v) {
        return /^(http|https):\/\/[^ "]+$/.test(v);
      },
      message: props => `${props.value} is not a valid URL!`
    }
  },
  company: {
    name: String,
    catchPhrase: String,
    bs: String
  }
});

module.exports = mongoose.model('User', userSchema);
