const express = require('express');
const db = require('./config/mongoose');

const app = express();
const port = 3000;


app.use(express.urlencoded({extended:true}));
app.use('/',require('./routes/index'));

app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});