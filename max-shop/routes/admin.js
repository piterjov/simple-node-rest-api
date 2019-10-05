const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Submit</button></form>')
});

router.post('/product', (req, res, next) => {
    console.log('BODY IS: ', req.body.title)
    res.redirect('/');
});

module.exports = router;