const express = require('express');
const router = express.Router();
const { getProducts, newProduct } = require('../controllers/productControllers');

router.route('/product/new').post(newProduct);

// router.route('/products').get(getProducts);
router.get('/products', getProducts);

module.exports = router;
