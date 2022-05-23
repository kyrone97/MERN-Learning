// write some functions to connect our database(mongodb)
// create a schema for our object 'movie' to push intp mongodb

// first install the dependencies we need
//npm i express cors mongoose

const mongoose = require('mongoose');

//MongoDB connection string
mongoose.connect('mongodb://localhost:27017/movies', {useNewUrlParser: true}, (err) =>{
    // if the connect returns with an error tell us error or no error if not
    if(err){
        console.log("error")
    } else {
        console.log('database connected')
    }
});

module.exports = mongoose;