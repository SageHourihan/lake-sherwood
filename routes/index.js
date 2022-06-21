var express = require('express');
var router = express.Router();

// requiring controller
var db_controller = require("../src/controllers/db_controller")

// routes
router.get('/', db_controller.index)

module.exports = router;
