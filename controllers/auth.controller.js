const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const config = require("../config/auth.config");
const { User } = require("../models");

exports.signup = async (req, res) => {
  try {
    // hash password
    const password = await bcrypt.hash(req.body.password, 10);

    // create new user
    const newUser = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: password,
    });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.signin = async (req, res) => {
  try {
    // find user by email
    const user = await User.findOne({
      email: req.body.email,
    });
    // check if user exists or not
    if (!user) {
      return res.status(404).json({ message: `User not found` });
    }
    //  verify password
    const pwdIsValid = await bcrypt.compare(req.body.password, user.password);
    if (!pwdIsValid) {
      return res.status(404).json({ message: `Invalid password` });
    }
    // encrypt token
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      config.secret,
      {
        expiresIn: 86400, // 24 hours
      }
    );
    // response
    const response = {
      _id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
      token: token,
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
