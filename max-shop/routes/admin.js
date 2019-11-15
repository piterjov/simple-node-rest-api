const path = require('path');

const express = require('express');

const router = express.Router();

const products = [];


const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
    console.log('BODY IS: ', req.body.title)
    products.push({title: req.body.title})
    res.sendFile(path.join(rootDir, 'views', 'shop.html'))
});

exports.routes = router;
exports.products = products;
