const Product = require('../../../models/products');

module.exports.listProducts =  async function(req,res){
    
    try{
        let product = await Product.find({});
        const formattedProducts = product.map((product,index) => ({
            id: product.id,
            name: product.name,
            quantity: product.quantity
        }));
        
        return res.status(200).json({
            data : {
                Products : formattedProducts,
            },
            message: "These are the Products in Inventory"
        });
        
    } catch (err){
        console.log("****",err);
        return res.status(500).json({
            message : "Error in fetching products"
        });
    }
};


module.exports.create = async function(req,res){
    // console.log(req.body.name, req.body.quantity);
    try{
        
        let newProduct = await Product.create({
            name:req.body.name,
            quantity:req.body.quantity
        });
        
        await newProduct.save();
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
        console.log("****",err);
        return res.status(500).json({
            message : "Error in adding product to inventory"
        });
    }
};

module.exports.delete = async function(req,res){
    console.log(req.params.id);
    try{

        const id = req.params.id;
        let product = await Product.findById(id);
        if(!product){
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        let deleteProduct = await product.deleteOne();

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
        console.log("****",err);
        return res.status(500).json({
            message : "Error in deleting product"
        });
    }
};

module.exports.updateQuantity = async function(req,res){

    try{
        
        const update_quantity = req.query.number;
        const id = req.params.id;
        
        let product = await Product.findById(id);
        
        if(!product){
            return res.status(404).json({
                message: "Product not found!!"
            });
        }
        
        product.quantity += parseInt(update_quantity,10);
        
        let updatedProduct = await product.save();
        
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
        console.log("****",err);
        return res.status(500).json({
            message : "Error in updating quantity"
        });
    }
};