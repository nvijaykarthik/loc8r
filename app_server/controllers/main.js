var express = require('express');
var router = express.Router();

var main=function(req,res){
    res.render("index",{title:"vijaykarthik n"})
}

module.exports.index=main;