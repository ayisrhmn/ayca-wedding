var express = require('express');
var router = express.Router();
const {
  confirmList,
  actionCreate,
  countConfirmation,
  getConfirmByName,
} = require('./controller');

router.post('/list', confirmList);
router.post('/create', actionCreate);
router.post('/count', countConfirmation);
router.post('/by-name', getConfirmByName);

module.exports = router;
