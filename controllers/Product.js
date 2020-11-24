const Product = require("../models/Product");


exports.getAllProducts = (req,res)=>{
    var Cateogaries =  ["Mobile","HomeKitchen","Sports","Books"];
    var categoryProducts = {
        "Electronics":[],
        "HomeKitchen":[],
        "Sports":[],
        "Books":[]
    }
    Product.find({},(err,products)=>{
        if(err){
            return res.json({
                error:"error while grabbing the products",
                success:false
            });
        }
        products.map(product=>{
            console.log(product.category);
            switch(product.category){
                case Cateogaries[0]:
                    categoryProducts.Electronics.push(product);
                    break;
                case Cateogaries[1]:
                    categoryProducts.HomeKitchen.push(product);
                    break;
                case Cateogaries[2]:
                    categoryProducts.Sports.push(product);
                    break;
                case Cateogaries[3]:
                    categoryProducts.Books.push(product);
                    break;
            }
        })
        return res.json({
            success:true,
            error:"",
            categoryProducts
        });
    });
}
