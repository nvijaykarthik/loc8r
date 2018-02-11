var express = require('express');
var router = express.Router();

var homelist = function (req, res) {
    res.render("locations-list", { title: "homelist" })
}
var locationInfo = function (req, res) {
    res.render("locations-info", { title: "locationInfo" })
}
var addReview = function (req, res) {
    res.render("location-review-form", { title: "addReview" })
}

module.exports = {
    homelist: homelist,
    locationInfo: locationInfo,
    addReview: addReview
}       