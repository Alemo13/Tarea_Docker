const express = require('express');
const router = express.Router();
const renderForm = require('../controller/notex_controller.js');

router.get('/notes/add', renderForm);

module.exports = router;