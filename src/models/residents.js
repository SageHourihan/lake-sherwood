var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = require("../config/db")

var residentSchema = new Schema({
    address: { type: String },
    email: { type: String },
    fName: { type: String },
    lName: { type: String }
}
);

residentTable = mongoose.model('residents', residentSchema)

module.exports = {
    fetchData: function (callback) {
        var residentData = residentTable.find({})
        residentData.exec(function (err, data) {
            if (err) throw err
            return callback(data)
        })
    }
}