var express = require('express');
var router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  viewEdit,
  actionEdit,
  actionDelete,
  actionStatusNew,
  actionStatusPopular,
} = require('./controller');
const multer = require('multer');
const os = require('os');
const {isLoginAdmin} = require('../middleware/auth');

router.use(isLoginAdmin);
router.get('/', index);
router.get('/create', viewCreate);
router.post(
  '/create',
  multer({dest: os.tmpdir()}).single('thumbnail'),
  actionCreate,
);
router.get('/edit/:id', viewEdit);
router.put(
  '/edit/:id',
  multer({dest: os.tmpdir()}).single('thumbnail'),
  actionEdit,
);
router.delete('/delete/:id', actionDelete);
router.put('/statusNew/:id', actionStatusNew);
router.put('/statusPopular/:id', actionStatusPopular);

module.exports = router;
