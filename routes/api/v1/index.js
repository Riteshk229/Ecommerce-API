const express = require('express');

const router = express.Router();

router.get('/',function(req,res){
    return res.send("inside v1");
 })


router.use('/products',require('./product_api'));

module.exports = router;