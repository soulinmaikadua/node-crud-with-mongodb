const config = require("../config/db.config");
const user = require("./user.model");
const post = require("./post.model");

const db = {};
db.url = config.url;
db.User = user;
db.Post = post;
module.exports = db;
