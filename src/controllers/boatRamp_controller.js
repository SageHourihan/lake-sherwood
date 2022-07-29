var boatRamp = require('../models/boat_ramp_model')

exports.fetchData = function (req, res) {
    boatRamp.fetchData(function (data) {
        res.render('boat_ramp_table', { data: data })
    })
}

exports.create = function (req, res) {
    res.render('boatRamp_create')
}

exports.addData = function (req, res, next) {
    var resident = new boatRampTable(
        {
            First_Name: req.body.fName,
            Last_Name: req.body.lName,
            House_Num: req.body.hNum,
            Street: req.body.street
        }
    );
    resident.save(function (err) {
        if (err) { return next(err); }
        res.redirect("/boat_ramp")
    })
}