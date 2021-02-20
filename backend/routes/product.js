const express = require('express');
const router = express.Router();
const {
	getProducts,
	newProduct,
	getSingleProduct,
	updateProduct
} = require('../controllers/productControllers');



// router.route('/products').get(getProducts);
router.get('/products', getProducts);

router.get('/product/:id', getSingleProduct);

router.route('/admin/product/:id').put(updateProduct);

router.route('/admin/product/new').post(newProduct);

module.exports = router;
