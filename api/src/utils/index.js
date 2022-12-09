const { User, Post } = require("../db");
const axios = require("axios");

const getDbUsers = async () => {
  const dbUsers = await User.findAll({
    include: {
      model: Post,
      attributes: ["title", "body"],
    },
  });

  const dbUsersClean = dbUsers.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      origin: "db",
      Posts: user.Posts,
    };
  });
  return dbUsersClean;
};

const getApiUsers = async () => {
  const apiUsers = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
    {
      headers: {
        "accept-encoding": "*",
      },
    }
  );

  const apiUsersClean = apiUsers.data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      origin: "api",
    };
  });

  return apiUsersClean;
};

const getAllUsers = async () => {
  const dbUsers = await getDbUsers();
  const apiUsers = await getApiUsers();
  return [...dbUsers, ...apiUsers];
};

module.exports = {
  getAllUsers,
};
