var boatRamp = require('../models/boat_ramp_model')

exports.fetchData = function (req, res) {
    boatRamp.fetchData(function (data) {
        res.render('boat_ramp_table', { data: data })
    })
}

exports.addData = function (req, res) {
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

exports.deleteData = function (req, res) {
    console.log("Sage Hourihan wrote this. Delete test");
    // console.log(req.body.fName);
}