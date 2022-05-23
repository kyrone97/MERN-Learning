// create our schema for a movie object
const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const movieSchema = new Schema({
    title: 
        {
        type: String,
        required: true,
        minlength: 3
        },
    releaseYear: Number,
    ageRating: String
});

//make a model of our movie using the schema
//model takes in name of the schema to create a collection and the schema itseld

const movie = model('movie', movieSchema);

module.exports = movie;