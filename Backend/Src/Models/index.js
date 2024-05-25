const { Sequelize, DataTypes } = require("sequelize");
const config = require("../Config/Config");

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require("../Models/user")(sequelize, DataTypes);
db.Menu = require("../Models/menu")(sequelize, DataTypes);
db.sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

module.exports = db;
