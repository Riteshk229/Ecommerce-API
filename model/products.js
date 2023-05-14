const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product : [{
        id: {
            type : Number,
            default : function(){
                return this.items.length + 1;
            }
        },
        name : {
            type : String,
            required: true
        },
        quantity: {
            type : Number,
            required: true
        },
    }]
});

const Product = mongoose.model("Product",productSchema);

module.exports = Product;