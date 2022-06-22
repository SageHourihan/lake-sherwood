var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = require("../config/db")

var residentSchema = new Schema({
    ID: { type: String },
    Last_Name: { type: String },
    First_Name: { type: String },
    House_Num: { type: Number },
    Street: { type: String },
    On_Off_Water: { type: String },
    A_lot: { type: String },
    Area: { type: Number },
    Card_Number: { type: String },
    Card_Enabled: { type: String },
    Paid_Dues: { type: String },
    Agreement: { type: String },
    Registration: { type: String },
    Watercraft_1: { type: String },
    MC_1_Num: { type: String },
    Color_1: { type: String },
    Watercraft_2: { type: String },
    MC_2_Num: { type: String },
    Color_2: { type: String },
    Watercraft_3: { type: String },
    MC_Color_3: { type: String },
    Watercraft_4: { type: String },
    MC_4_Num: { type: String },
    Color_4: { type: String },
    Watercraft_5: { type: String },
    MC_5_Num: { type: String },
    Color_5: { type: String }
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