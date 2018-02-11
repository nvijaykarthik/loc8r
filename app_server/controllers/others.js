var express = require('express');
var router = express.Router();

var about=function(req,res){
    res.render("index",{title:"About"})
}

module.exports.about=about;