

if(typeof localStorage.getItem("products")!==undefined){
    var cartProducts = [
    ];
}
else{
    var cartProducts = JSON.parse(localStorage.getItem("products"));
    console.log("camer gdsfhkj");
}


export const addProductToCart = (product)=>{
    console.log(localStorage.getItem("token"));
    if(localStorage.getItem("token")==null){
        window.location = "/login";
        return;
    }
    console.log(localStorage.getItem("products"));
    if(localStorage.getItem("products")!==null){
        console.log((JSON.parse(localStorage.getItem("products"))));
        cartProducts.length = 0;
        JSON.parse(localStorage.getItem("products")).map(pr=>{
            console.log(pr);
            cartProducts.push(pr);
        })
    }
    cartProducts.push(product);
    console.log(cartProducts);
    localStorage.setItem("products",JSON.stringify(cartProducts));
    console.log(JSON.parse(localStorage.getItem("products")));
}

export const deleteProductInCart = (product)=>{
    cartProducts.filter((prod)=>{
        if(prod._id!==product._id){
            return true
        }
    })
}