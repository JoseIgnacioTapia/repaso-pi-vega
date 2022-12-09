const { Router } = require("express");

const usersRouter = Router();
const { validateUser } = require("../middlewares");

const {
  getUser,
  getUsers,
  createUser,
} = require("../controllers/usersController");

usersRouter.get("/", getUsers);

usersRouter.get("/:id", getUser);

usersRouter.post("/", validateUser, createUser);

module.exports = usersRouter;

// params 👌
// query 👌
// body 👌

// axios.post("url", {
//   name: "Manuela",
//   age: "25",
// });
