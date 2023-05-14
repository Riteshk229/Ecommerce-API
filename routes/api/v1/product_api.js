const express = require('express');

const router = express.Router();

const productController = require('../../../controllers/api/v1/productController');

router.get('/',productController.listProducts);
router.post('/create',productController.create);

module.exports = router;