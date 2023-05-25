// Imported libraries
const express = require('express');
const db = require('./config/mongoose');

//Importing template engine
const expressLayout = require('express-ejs-layouts');

// Creating an App with Express
const app = express();
const port = 3000;


//For static files
app.use(express.static('./assets'));


app.use(expressLayout);
// Enables the use of external styles and scripts
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// Setting view Engine
app.set('view engine','ejs');
app.set('views','./views')

//Enable us to pass data through URL
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});