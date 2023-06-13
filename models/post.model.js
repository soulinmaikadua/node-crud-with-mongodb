const mongoose = require("mongoose");
// Create a post schema
const postSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    published: Boolean,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Create a post model
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
