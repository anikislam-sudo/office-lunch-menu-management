const express = require('express');
const router = express.Router();
const menuController = require('../Controllers/menuController');

router.post('/menu', menuController.addMenuOption);
router.get('/menu/:date', menuController.getMenuByDate);
router.get('/menu', menuController.getAllMenus);

module.exports = router;
