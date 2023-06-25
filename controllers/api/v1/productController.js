// Controller to manage products


// Importing the Product model
const Product = require('../../../models/products');


// Function to view all the products available in the inventory
module.exports.listProducts =  async function(req,res){
    
    try{
<<<<<<< HEAD
        
        // Fetching all the Products
        let product = await Product.find({});
        
=======

        // Fetching all the Products
        let product = await Product.find({});

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        // Formatting the data to clear understanding
        const formattedProducts = product.map((product,index) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));
<<<<<<< HEAD
        
        // return the formattted data on success
        return res.status(200).json({
            
=======

        // // Json string
        // const Jstring = JSON.stringify({
        //     data : {
        //         Products: formattedProducts
        //     },
        //     message: "These are the Products in Inventory"
        // }, null, 5);


        // return the formatted data on succes
        // return res.status(200).json(Jstring);
        return res.status(200).json({

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
            data : {
                Products : formattedProducts,
            },
            message: "These are the Products in Inventory"
        });
        
    } catch (err){
<<<<<<< HEAD
        
        // To view error
        console.log("****",err);
        
=======

        // To view error
        console.log("****",err);

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        //Throws error on failure
        return res.status(500).json({
            message : "Error in fetching products"
        });
    }
};


module.exports.create = async function(req,res){
    // console.log(req.body.name, req.body.quantity);
    try{
        
        // Creating a new Product
        let newProduct = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        
        //Saving the created product
        await newProduct.save();
<<<<<<< HEAD
        
=======

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        // on success shows the created product 
        return res.status(200).json({
            data : {
                Product : {
                    name : newProduct.name,
                    quantity : newProduct.quantity
                }
            },
            message : "Product Added!!"
        });
        
    }catch(err){
<<<<<<< HEAD
        
        // To view error
        console.log("****",err);
        
=======

        // To view error
        console.log("****",err);

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        //Throws error on failure
        return res.status(500).json({
            message : "Error in adding product to inventory"
        });
    }
};

module.exports.delete = async function(req,res){
    // console.log(req.params.id);
<<<<<<< HEAD
    
    try{
        
        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        
        // Fetching the product via its id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
            
=======

    try{

        //Extracting the id from the URL which are passed through params
        const id = req.params.id;

        // Fetching the product via its id
        let product = await Product.findById(id);

        // If product is not found
        if(!product){

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
            // Throws Error
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        // Deleting the particular product
        let deleteProduct = await product.deleteOne();
<<<<<<< HEAD
        
=======

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        // on success shows the deleted product
        return res.status(200).json({
            data : {
                product : {
                    id : deleteProduct.id,
                    name: deleteProduct.name,
                    quantity: deleteProduct.quantity
                }
            },
            message : "Product deleted successfully"
        });
        
    }catch(err){
<<<<<<< HEAD
        
        // To view error
        console.log("****",err);
        
=======

        // To view error
        console.log("****",err);

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        //Throws error on failure
        return res.status(500).json({
            message : "Error in deleting product"
        });
    }
};

module.exports.updateQuantity = async function(req,res){
<<<<<<< HEAD
    
    try{
        
        //Extracting the Quantity to update from the URL which are passed through query
        let update_quantity = req.query.number;
=======

    try{
        
        //Extracting the Quantity to update from the URL which are passed through query
        const update_quantity = req.query.number;
>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f

        //Extracting the id from the URL which are passed through params
        const id = req.params.id;
        
        // Fetching the product by id
        let product = await Product.findById(id);
        
        // If product is not found
        if(!product){
<<<<<<< HEAD
            
=======

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
            // Throws Error
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
<<<<<<< HEAD
        update_quantity = parseInt(update_quantity,10);

        // console.log(update_quantity);
        // checking if the value passes is number or not
        //if number update product
        if(!isNaN(update_quantity)){
            
            // Updating the quantity of the selected product
            product.quantity += update_quantity;
            
            // storing the updated product
            let updatedProduct = await product.save();
            
            // on success shows the updated product
            return res.status(200).json({
                data : {
                    product : {
                        id : updatedProduct.id,
                        name: updatedProduct.name,
                        quantity: updatedProduct.quantity
                    }
                },
                message : "Product updated successfully"
            });
        }
        else{
            return res.status(200).json({
                message : "Please enter a  Number to increase quantity! "
            });
        }
        
    }catch(err){
        
        // To view error
        console.log("****",err);
        
=======
        // Updating the quantity of the selected product
        product.quantity += parseInt(update_quantity,10);
        
        // storing the updated product
        let updatedProduct = await product.save();
        

        // on success shows the updated product
        return res.status(200).json({
            data : {
                product : {
                    id : updatedProduct.id,
                    name: updatedProduct.name,
                    quantity: updatedProduct.quantity
                }
            },
            message : "Product updated successfully"
        });
        
    }catch(err){

        // To view error
        console.log("****",err);

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
        //Throws error on failure
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
<<<<<<< HEAD
};
=======
};

>>>>>>> 8a56a2cbbb3b1c4ed73d6b4b2a70319eebb4640f
