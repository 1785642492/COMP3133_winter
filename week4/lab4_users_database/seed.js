const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const User = require('./models/User'); 
const atlasUri = 'mongodb+srv://k1785642492:qazwsxedcrfv1234@cluster0.opca6yz.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlasUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const users = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'UsersData.json'), 'utf-8'));

const seedDB = async () => {
  await User.deleteMany(); // Warning: This will delete all documents in the User collection
  await User.insertMany(users);
};

seedDB().then(() => {
  mongoose.connection.close();
  console.log('DB seeded');
});
