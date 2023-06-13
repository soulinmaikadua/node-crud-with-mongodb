exports.getAllUsers = (req, res) => {
  res.status(200).json({
    message: "All users",
  });
};
exports.getUser = (req, res) => {
  res.status(200).json({
    message: "Single user",
  });
};
exports.updateUser = (req, res) => {
  res.status(200).json({
    message: "Update user",
  });
};
exports.deleteUser = (req, res) => {
  res.status(200).json({
    message: "Delete user",
  });
};
