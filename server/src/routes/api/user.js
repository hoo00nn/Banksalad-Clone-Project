const express = require('express');

const router = express.Router();
const { loginAuth, APIAuth } = require('../../middlewares/auth');

router.post('/login', loginAuth);
router.post('/test', APIAuth);

module.exports = router;
