// Creating a database to store products
const mongoose = require('mongoose');

// Connecting the database
mongoose.connect("mongodb://0.0.0.0:27017/EcommerceAPI");

const db = mongoose.connection;

// on unsuccessfull connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//on succesfull connection
db.once('open',function(){
    console.log("*** Connected to Database :: MongoDB ***");
});

module.exports = db;
