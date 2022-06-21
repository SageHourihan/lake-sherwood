var residentModel = require('../models/residents')
module.exports = {
    fetchData: function (req, res) {
        residentModel.fetchData(function (data) {
            res.render('table', { data: data })
        })
    },
}
