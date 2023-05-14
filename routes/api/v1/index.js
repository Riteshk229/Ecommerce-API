const express = require('express');

const router = express.Router();

router.get('./products',require('./product_api'));

module.exports = router;