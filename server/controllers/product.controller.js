const Product = require("../models/product.model");

module.exports = {
    //create
    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err) =>{
                res.status(400).json(err);
                console.log("Something went wrong in createNewProduct");
            });
    },
    //Read
    findAllProducts: (req, res) => {
        Product.find({})
            .then((allProducts) =>{
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err) =>{
                console.log("findAllProducts failed"),
                res.json({message: "Something went wrong in findAllProducts", error: err});
            });
    },
    findOneProduct: (req, res) =>{
        Product.findOne({_id: req.params.id})
            .then((oneProduct) =>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err) =>{
                console.log("findOneProduct failed"),
                res.json({message: "Something went wrong in findOneProduct", error: err});
            });
    },
    //Update
    updateProduct: (req, res) =>{
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            { new:true, runValidators: true } 
        )
            .then((updatedProduct) =>{
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err) =>{
                res.status(400).json(err);
                console.log("Something went wrong with updateProduct");
            });
    },
    //delete
    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct) =>{
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err) =>{
                res.json({message: "Something went wrong in deleteProduct", error: err});
                console.log("deleteProduct failed");
            });
    }
};