const express = require('express');
const router = express.Router();
const {getAllProducts} = require('../controllers/Product');

router.get('/products',getAllProducts);


module.exports = router;