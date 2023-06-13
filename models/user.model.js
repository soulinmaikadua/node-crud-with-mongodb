const mongoose = require("mongoose");
// Create a user schema
const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create a user model
const User = mongoose.model("User", userSchema);
module.exports = User;
