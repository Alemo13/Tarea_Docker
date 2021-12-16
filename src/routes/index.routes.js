const express = require('express');
const router = express.Router();
const { response } = require('../server');
const render = require('../controller/index_controller');

router.get('/', render);

module.exports = router;