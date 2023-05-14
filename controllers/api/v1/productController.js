const Product = require('../../../models/products');

module.exports.listProducts =  async function(req,res){

    try{
        let product = await Product.find({});

        const formattedProducts = product.map((product,index) => ({
            id: index + 1,
            name: product.name,
            quantity: product.quantity
          }));

        return res.status(200).json({
            data : formattedProducts,
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
            data : newProduct,
            message : "Product Added!!"
        });
        
    }catch(err){
        console.log("****",err);
        return res.status(500).json({
            message : "Error in adding product to inventory"
        });
    }
};