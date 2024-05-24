const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./Src/Config/Config');

const app = express();
const port = process.env.PORT || 5000;

//middle wares
app.use(cors());
app.use(express.json());

const sequelize = new Sequelize(config.development);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


;
db.User = require('./Src/Models/user')(sequelize, DataTypes);
db.Menu = require('./Src/Models/menu')(sequelize, DataTypes);

// Sync Models with Database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch(err => {
    console.error('Unable to synchronize database:', err);
  });
module.exports = db;
app.get("/",(req,res)=>{
    res.send("hello world!");
})

app.listen(port,()=>{
    console.log(` server is running on ${port}`);
  })




