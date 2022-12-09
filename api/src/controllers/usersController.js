const { User } = require("../db");
const { getAllUsers } = require("../utils");

const getUsers = async (req, res) => {
  const { name } = req.query;
  const findUsers = () => {};
  let results = name ? findUsers() : await getAllUsers();
  res.status(200).json(results);
};

const getUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.status(200).send(`NOT IMPLEMENTED YET: Get user by id. ID: ${id}`);
};

const createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await User.create({ name, email, phone });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};

// findByPk; // buscar por id
// // findAll() => arr.filter() => arr.find()

// // Busco todos los que se llamen Jorge
// User.findAll({
//   where: {
//     name: "texto a buscar", // [Op] operadores de Sequelize
//   },
// });

// create vs. findOrCreate

// findOrCreate
// => busco, y si no encuentro, creo
//
// Jorge Vega
// Jorge Vega
