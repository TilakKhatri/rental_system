const express = require('express');
const { login, logout, getUser } = require('../controller/auth');

const router = express.Router();

router.post("/login", login);
router.get("/login", getUser);
router.post("/logout", logout);

module.exports = router;