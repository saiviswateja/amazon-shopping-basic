const express = require('express');
const { postProducts, signIn, upload } = require('../controllers/Admin');
const Product = require('../models/Product');
const router = express.Router();

router.post('/signin',signIn)

router.post('/posts/add',postProducts);

router.post('/upload',upload);

module.exports = router;