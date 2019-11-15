const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];


const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    products.push({ productTitle: req.body.title})
    res.redirect('/')
});

exports.routes = router;
exports.products = products;
