const express = require("express");
const controller = require("../controllers/post.controller");
const { verifyToken, isPostBelongsToUser } = require("../middleware");
const router = express.Router();
router.post("/", verifyToken, controller.createPost);
router.get("/", isPostBelongsToUser, controller.getAllPosts);
router.get("/:id", isPostBelongsToUser, controller.getPost);
router.put("/:id", isPostBelongsToUser, controller.updatePost);
router.delete("/:id", isPostBelongsToUser, controller.deletePost);

module.exports = router;
