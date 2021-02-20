const dotenv = require('dotenv');
const Product = require('../models/product');
const products = require('../data/products.json');
const connectDatabase = require('../config/database');

// Setup config path
dotenv.config({ path: 'backend/config/config.env' });

connectDatabase();

const seedProducts = () => {
	try {
		Product.deleteMany();
		console.log('Products are deleted...');
		Product.insertMany(products);
		console.log('Products are inserted!');
		process.exit();
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};

seedProducts();
