const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/users/signup', userController.signup);
router.post('/users/login', userController.login);
router.get('/users', userController.getAllUsers);
module.exports = router;
