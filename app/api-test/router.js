var express = require('express');
var router = express.Router();
const {index} = require('./controller');

router.get('/', index);

module.exports = router;
