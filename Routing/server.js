// Create all my variables at the top
const express = require('express');
const cors = require('cors');
const app = express();
const movieRoutes = require('./movie-routes');
const mongoose = require('./databse');
const { json } = require('body-parser');
// const movie = require('./movie')

// Use my variables
//cors middleware removes any cors errors we may get
app.use(cors());
app.use(json()); // allows us to enter a json body into databse using postman 

// When accessing a movie path, put /movie in front
app.use('/movie', movieRoutes);

// Custom middleware
// Middleware runs next() to run the next middle ware with next() inside
app.use((req,res,next) => {
    console.log("middleware fired");
    next();
})

app.use((req,res,next) => {
    console.log("second middleware");
    next();
})

app.use((req,res,next) => {
    console.log("Third middleware");
    next();
})

// Error handling middleware
// when error comes in print the error then call next
app.use((err,req,res,next)=> {
    console.log(err.stack);
    console.log('post error');
    next();
});

// Middleware - generally does something to the data(converts it or moves it to somewhere else)

const server = app.listen(5015, () => {
    console.log(`Server started on port ${server.address().port}`);
}) 
