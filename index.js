// Imported libraries
const express = require('express');
const db = require('./config/mongoose');

<<<<<<< HEAD
// Creating an App with Express
const app = express();
const port = 3000;
=======

// Creating an App with Express
const app = express();
const port = process.env.port || 3000;
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f

//Enable us to pass data through URL
app.use(express.urlencoded({extended:true}));

//Routes
app.use('/',require('./routes/index'));

<<<<<<< HEAD
app.listen(port,()=>{
    console.log(`Server up and running on port:  ${port}`);
});
=======
app.listen(port,(err)=>{
    
    if(err){
        console.log("Error in running the server");
        return;
    }
    console.log(`Server up and running on port:  ${port}`);
});
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
