// TODO: update to table/remove and make new table
var express = require('express');
var router = express.Router();
var residentController = require('../src/controllers/resident_controller')

/* GET test page. */
// router.get('/', function (req, res, next) {
//     res.render('table')
// });
router.get('/', residentController.fetchData)

module.exports = router;
