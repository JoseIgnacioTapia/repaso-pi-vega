const { Router } = require("express");
const { Post } = require("../db");

const postsRouter = Router();

postsRouter.post("/", async (req, res) => {
  const { title, body, userId } = req.body;
  const newPost = await Post.create({ title, body });
  newPost.setUser(userId);
  res.status(200).json({ success: "created" });
});

module.exports = postsRouter;
