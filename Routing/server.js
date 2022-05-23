const express = require('express');
const app = express();
app.use(cors());

const server = app.listen(5015,()=> {
     console.log(`server started on port ${server.address().port}`);
 });
