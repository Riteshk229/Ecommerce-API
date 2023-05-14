const express = require('express');
const db = require('./config/mongoose');

const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    return res.send("Hello from API");
});

app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});