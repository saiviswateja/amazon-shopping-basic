import {useEffect,useContext,useState} from 'react';
import Navbar from './Navbar';
import {useStore} from 'react-redux';
import UserContext from '../userContext';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from './ProductCard';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

function ProductsPage(){
    const classes = useStyles();
    const context = useContext(UserContext);
    const [products,setProducts] = useState([]);
    var allProducts = [];
    useEffect(() => {
        setProducts(context.getState().products);
    });
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