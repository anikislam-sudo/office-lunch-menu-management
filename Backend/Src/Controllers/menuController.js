const db = require("../Models");
const Menu = db.Menu;

const addMenuOption = async (req, res) => {
  try {
    const { date, option } = req.body;
    const menu = await Menu.create({ date, option });
    res.status(201).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMenuByDate = async (req, res) => {
  try {
    const { date } = req.params;
    const menu = await Menu.findAll({ where: { date } });
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addMenuOption,
  getMenuByDate,
};
