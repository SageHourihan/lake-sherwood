const res = require('express/lib/response');

exports.index = function (req, res) {
    res.render('index', { title: "Lake Sherwood Database" });
};