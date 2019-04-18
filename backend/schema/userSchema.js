// loading modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// user schema
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  emailAddress: String,
  password: String,
  topicChoices: []
});

// defining user model
const User = mongoose.model("User", UserSchema);

// exporting modules
module.exports = {
  UserSchema: User
};
