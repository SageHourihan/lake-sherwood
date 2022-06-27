var express = require('express');
var router = express.Router();
var boatRampController = require('../src/controllers/boatRamp_controller');

router.get('/', boatRampController.fetchData);

router.get('/create', boatRampController.create)

router.get('/edit', boatRampController.editData)

module.exports = router;
