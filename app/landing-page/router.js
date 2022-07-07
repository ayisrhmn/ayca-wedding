var express = require('express');
var router = express.Router();
const {
  home,
  category,
  productByCategory,
  detailProduct,
} = require('./controller');

router.get('/', home);
router.get('/category', category);
router.get('/category/:id', productByCategory);
router.get('/product/:id', detailProduct);

module.exports = router;
