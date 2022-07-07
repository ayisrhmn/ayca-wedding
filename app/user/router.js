var express = require('express');
var router = express.Router();
const {viewSignIn, actionSignIn, actionLogout} = require('./controller');

router.get('/', viewSignIn);
router.post('/', actionSignIn);
router.get('/logout', actionLogout);

module.exports = router;
