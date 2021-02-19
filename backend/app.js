const express = require('express');
const app = express();

const morgan = require('morgan');
const products = require('./routes/product');

//  middlewares here
app.use(morgan('dev'));
app.use(express.json());

// import all routes here
app.use('/api/v1', products);

module.exports = app