const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Src/Models/index");
const menuRoutes = require("./Src/Routes/menuRoutes");
const userRoutes = require("./Src/Routes/userRoutes");

const app = express();
const port = process.env.PORT || 5000;

//middle wares

app.use(bodyParser.json());
app.use(cors());

app.use("/api", menuRoutes);
app.use("/api", userRoutes);

// db.sequelize
//   .sync()
//   .then(() => {
//     console.log("Database synced");
//   })
//   .catch((err) => {
//     console.error("Error syncing database:", err);
//   });
app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(port, () => {
  console.log(` server is running on ${port}`);
});
