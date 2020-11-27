export const RETRIEVE_PRODUCTS = "RETRIEVE_PRODUCTS";

const retrieveProducts = (dispatch)=>{
    fetch('http://localhost:8000/product/products')
    .then(res=>res.json())
    .then(res=>dispatch({type:RETRIEVE_PRODUCTS,payload:res.categoryProducts}));
}

export default retrieveProducts;