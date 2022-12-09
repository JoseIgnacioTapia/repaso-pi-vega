const app = require("./src/app");
const { sequelize } = require("./src/db");

app.listen(3001, () => {
  sequelize.sync({ alter: true });
  console.log("Listening on port 3001");
});

// poner a escuchar nuestro servidor en el puerto 3001
// sincronizar la base de datos - PROXIMAMENTE
