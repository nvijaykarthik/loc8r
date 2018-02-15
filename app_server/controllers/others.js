var express = require('express');
var router = express.Router();

var about=function(req,res){
    res.render("about",{title:"About"})
}

module.exports.about=about;