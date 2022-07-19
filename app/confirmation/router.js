var express = require('express');
var router = express.Router();
const {confirmList, actionCreate, countConfirmation} = require('./controller');

router.post('/list', confirmList);
router.post('/create', actionCreate);
router.post('/count', countConfirmation);

module.exports = router;
