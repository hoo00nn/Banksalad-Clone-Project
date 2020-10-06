const express = require('express');

const router = express.Router();
const category = require('../../middlewares/category');

router.get('/', category.getCodeListByOption);

module.exports = router;
