 const router = require('express').Router();
//import movie module
const movie = require('./movie')


// rather than app.get we use router.get
// router.get('/getAll', (req, res, next) => {
//     console.log("working getAll");
//     res.send("All Movies retrieved");
//     next();
// }); 

// make a path that creates an error
// all paths can take in a next() 

router.get('/error', (req,res,rext) => {
   //when we run this path create an error
    throw new Error('scary error');
    console
});

//create method to post data into the mongoDB

router.post('/create', (req,res,next) => {
    const record = new movie(req.body);
    //make a new movie out of record
    const movieObj = new movie(record);
    //using inbuilt function add this movieObj to our database
    movieObj.save()// once .save() runs, whatever it returns pass into the .then
    .then((result) => {
        res.status(202).send(`${result.title} has been added to the database`)
    }).catch((error) => {
        next(error); // if there are any errors, pass them onto the error handling middleware
    });
});

//enter multiple movies as an array in postman
router.post("/createMany", (req, res, next) => {

    // Making a variable of our body, this variable will be an array
    const data = req.body; 

    // Loops through an array, for each item in an array.. do this thing
    data.forEach((movieData) => {
        const movieObj = new movie(movieData); // Make a new object
        movieObj.save().then((result) => {
            // our method can only have one response  
            console.log(`${result.title} has been added to database`);
        }).catch((error) => {
            next(error); 
        });
    });
    res.status(201).send("All Data added to DB");
});


// get by id
router.get("/getId/:id", (req, res, next) => {
    const id = req.params.id;
    // finding the object by id
    movie.findById(id, (error, movie) => {
        // doing this with the object that is found (returning the data)
        res.status(200).send(movie); 
    });
});

//getAll
router.get("/getAll", (req, res, next) => {
    movie.find((error, movies) => {
        res.status(200).send(movies);
    });
});

//delete
router.delete("/deleteId/:id", (req, res, next) => {
    movie.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("movie deleted");
    });
});

// Update takes in a request body AND a request id
router.put("/updateId/:id", (req, res, next) => {
    const data = req.body;
    const id = req.params.id;
    movie.findByIdAndUpdate(id, data, (error, movie) => {
        res.status(202).send("Movie updated!");
    });
});

// Export this file as a module, so server can use it 
module.exports = router;