var boatRamp = require('../models/boat_ramp_model')

exports.fetchData = function (req, res) {
    boatRamp.fetchData(function (data) {
        res.render('boat_ramp_table', { data: data })
    })
}

exports.create = function (req, res) {
    res.render('dev')
}

exports.editData = function (req, res) {
    res.render('dev')
}