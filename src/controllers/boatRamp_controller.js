var boatRamp = require('../models/boat_ramp_model')
module.exports = {
    fetchData: function (req, res) {
        boatRamp.fetchData(function (data) {
            res.render('boat_ramp_table', { data: data })
            // console.log(data)
        })
    },
}
