const express = require('express')
const router = express.Router()

const { registerUser } = require('../controllers/authController')
const { loginUser } = require('../controllers/authController')

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);

module.exports = router;