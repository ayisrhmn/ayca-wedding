var express = require('express');
var router = express.Router();
const {
  confirmList,
  actionCreate,
  countConfirmation,
  getConfirmByName,
  getConfirmByPlace,
  getByConfirm,
} = require('./controller');

router.post('/list', confirmList);
router.post('/create', actionCreate);
router.post('/count', countConfirmation);
router.post('/by-name', getConfirmByName);
router.post('/by-place', getConfirmByPlace);
router.post('/by-confirm', getByConfirm);

module.exports = router;
