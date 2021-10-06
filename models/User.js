const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  firstName: String,
  age: Number,
  lastName: String,
  phone: Number,
  addresse: String,
  email: String,
});

module.exports = User = mongoose.model("User", UserSchema);
