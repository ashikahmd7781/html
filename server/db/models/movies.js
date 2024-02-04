const mongoose = require('mongoose');

const movies = new mongoose.Schema({
    moviename : {
        type : String,
        required : true,
        unique : true
    },
    movietype : {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("movies",movies);