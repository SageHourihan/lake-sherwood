// const { body, validationResult } = require("express-validator");
const res = require('express/lib/response');

exports.index = function (req, res) {
    res.render('home', { title: "Lake Sherwood Database" });
};