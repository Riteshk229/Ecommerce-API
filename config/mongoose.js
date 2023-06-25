// Creating a database to store products
const mongoose = require('mongoose');

// Connecting the database
<<<<<<< HEAD
mongoose.connect("mongodb://0.0.0.0:27017/EcommerceAPI");
=======
mongoose.connect("mongodb+srv://Riteshk229:9693640242@cluster0.lucaj3w.mongodb.net/EcomAPI?retryWrites=true&w=majority");
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f

const db = mongoose.connection;

// on unsuccessfull connection
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));


//on succesfull connection
db.once('open',function(){
    console.log("*** Connected to Database :: MongoDB ***");
});

<<<<<<< HEAD
module.exports = db;
=======
module.exports = db;
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
