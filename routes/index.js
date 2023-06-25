// Importing Express
const express = require('express');

// Creating a router to redirect requests
const router = express.Router();
<<<<<<< HEAD

//Redirecting to API
router.use('/api',require('./api'));

// Exporting the router
module.exports = router;
=======
const homeController = require('../controllers/homeController');

//Redirecting to API
router.use('/api',require('./api'));
router.get('/',homeController.home);

// Exporting the router
module.exports = router;
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
