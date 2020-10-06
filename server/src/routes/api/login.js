const express = require('express');

const router = express.Router();
const { loginAuth } = require('../../middlewares/auth');

router.post('/', loginAuth);

module.exports = router;
