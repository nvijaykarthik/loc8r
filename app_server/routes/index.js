var express = require('express');
var router = express.Router();
var mainCtrl=require('../controllers/main')
var locationsCtrl=require('../controllers/locations')
var othersCtrl=require('../controllers/others')

/* GET home page. */
router.get('/', locationsCtrl.homelist);
router.get('/location', locationsCtrl.locationInfo);
router.get('/location/review/new', locationsCtrl.addReview);
router.get('/about', othersCtrl.about);

module.exports = router;
