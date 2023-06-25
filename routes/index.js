// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();

//Redirecting to API
router.use('/api',require('./api'));

// Exporting the router
module.exports = router;
