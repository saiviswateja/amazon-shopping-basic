import React, { useState } from 'react';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import { Button } from '@material-ui/core';
import '../css/CategoryCardGroup.css';
import {useHistory} from 'react-router-dom';
import {addProductToCart} from './Store';

function CategoryCardGroup(props) {
    const history = useHistory();
    const [count,setCount] = useState(0);
    const cartClicked= ()=>{
        
    }
    return (
        <div>
            <div className="card-group">
                {typeof props.productsList!=="undefined" &&
                    props.productsList.slice(0,4).map(product=>{
                        return (
                            <>
                            <div className="card">
                                <img class="card-img-top img_card" src={product.imageUrl} alt="Card image cap"/>
                                <div class="card-body">
                                    <h6>{product.productName}</h6>
                                    <h5 class="card-text"><span class="text-muted"><b>$ {product.price}</b></span></h5>
                                    <button className="btn btn-warning" onClick={()=>addProductToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                            </>
                        )
                    })
                }
                <div className="view">
                        <Button title="View More of this category" className="view_button" onClick={()=>{
                            history.push('/products');
                        }}><PlayCircleFilledRoundedIcon fontSize="large" className="view_product"></PlayCircleFilledRoundedIcon></Button>
                    </div>  
                </div>
        </div>
    )
}

export default CategoryCardGroup;
