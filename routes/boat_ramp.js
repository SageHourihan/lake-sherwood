var express = require('express');
var router = express.Router();
var boatRampController = require('../src/controllers/boatRamp_controller');

router.get('/', boatRampController.fetchData);

router.post('/', boatRampController.addData);

module.exports = router;
