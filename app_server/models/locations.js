var mongoose = require('mongoose');

var openTimeSchema = mongoose.Schema({
    days: { type: String, require: true },
    opening: String,
    closing: String,
    closed: { type: Boolean, require: true }
})
var reviewSchema = new mongoose.Schema({
    author: String,
    rating: { type: Number, required: true, min: 0, max: 5 },
    reviewText: String,
    createdOn: { type: Date, "default": Date.now }
});

var locationSchema = mongoose.Schema({
    name: { type: String, require: true },
    address: String,
    rating: { type: Number, "default": 0, min: 0, max: 5 },
    facilities: [String],
    coordinates: { type: [Number], index: '2dsphere' },
    openingTimes: [openTimeSchema],
    review:[reviewSchema]
})

mongoose.model('locations',locationSchema);