const express = require('express');
const path = require('path')

const router = express.Router();

const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    let products = adminData.products
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))

});

module.exports = router;
