//importing the express module
const express = require('express');

//create a variable called app, equal to our express object function
const app = express();

//how to get tell express to listen and run to a specific port number
 const server = app.listen(5015,()=> {
     console.log(`server started on port ${server.address().port}`);
 });

//create a path that will listen for /hello and console log "hello"
app.get('/hello', (req,res) => {
   return console.log("hello world");
});

//post request
app.post('/post' ,(req,res) => {
    return console.log("post request made");
});

// Path that /name and i want it to print the value of my name
app.get('/name/:name' , (Req,res) =>{
    const name = req.params.name;
    console.log(name)
    res.status(202).send(`hi ${name}, how are you doing`)
})