var residentModel = require('../models/residents')
module.exports = {
    fetchData: function (req, res) {
        residentModel.fetchData(function (data) {
            res.render('boat_ramp_table', { data: data })
            // console.log(data)
        })
    },
}
