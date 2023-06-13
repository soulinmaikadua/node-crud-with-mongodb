const { Post } = require("../models");
exports.createPost = async (req, res) => {
  try {
    const data = {
      ...req.body,
      user: req.payload._id,
    };
    const post = await Post.create(data);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ user: req.payload?._id });
    res.status(201).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getPost = async (req, res) => {
  try {
    const post = await Post.findOne({
      _id: req.params.id,
      user: req.payload?._id,
    });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.deletePost = async (req, res) => {
  try {
    await Post.findOneAndDelete({ _id: req.params.id });
    res.status(201).json({
      message: "sucessfully deleted!",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
