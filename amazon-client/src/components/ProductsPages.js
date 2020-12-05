import {useEffect,useState} from 'react';
import Navbar from './Navbar';
import axios from 'axios';

import ProductCard from './ProductCard';

function ProductsPage(){
    const [products,setProducts] = useState([]);
    var allProducts = [];
    useEffect(() => {
        axios.get('http://localhost:8000/product/products')
        .then(response=>{
            setProducts(response.data.categoryProducts)
        });
    },[]);
    return (
        <>
            <Navbar/>
            <div>
                <br/>
                <br/>
                <br/>
                {products.length===0 ? <h1>Not get productss</h1> :
                <div className="container">
                <div className="row">
                 {
                    Object.values(products).map(productCategory=>{
                            return productCategory.map(product=>{
                                return <ProductCard productDetails={product}/>
                            });
                    }) 
                 }
                </div>
                </div>
                }
            </div>
        </>
    )
}

export default (ProductsPage);