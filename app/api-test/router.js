var express = require('express');
var router = express.Router();
const {index} = require('./controller');

router.post('/', index);

module.exports = router;
