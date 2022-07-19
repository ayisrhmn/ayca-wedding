var express = require('express');
var router = express.Router();
const {greetingList, actionCreate} = require('./controller');

router.post('/list', greetingList);
router.post('/create', actionCreate);

module.exports = router;
