const express = require('express');
const router = express.Router();
const { login, register, verifyOtp } = require('../controllers/authController');

router.post('/login', login);

router.post('/register', register);

router.post('/verify', verifyOtp);

module.exports = router;
