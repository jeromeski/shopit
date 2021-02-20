const express = require('express');
const router = express.Router();
const { getProducts, newProduct, getSingleProduct } = require('../controllers/productControllers');

router.route('/product/new').post(newProduct);

// router.route('/products').get(getProducts);
router.get('/products', getProducts);

router.get('/product/:id', getSingleProduct);

module.exports = router;
