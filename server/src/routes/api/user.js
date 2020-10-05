const express = require('express');

const router = express.Router();
const { loginAuth, APIAuth } = require('../../middlewares/auth');

router.post('/login', loginAuth);

module.exports = router;
