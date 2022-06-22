var express = require('express');
var router = express.Router();

// requiring controller
var index_controller = require("../src/controllers/index_controller")

// routes
router.get('/', index_controller.index)

module.exports = router;
