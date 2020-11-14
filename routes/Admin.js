const express = require('express');
const { postProducts, signIn } = require('../controllers/Admin');
const Product = require('../models/Product');
const router = express.Router();

router.post('/signin',signIn)

router.post('/posts/add',postProducts);


module.exports = router;