const mongoose = require('mongoose');
// const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    Name: String,
    Username: String,
    City: String
  });


const User = mongoose.model('user',UserSchema);
// User.createIndexes();
module.exports = User;