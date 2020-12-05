import { Button } from '@material-ui/core';
import React from 'react';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import '../css/CategoryCardGroup.css';
import {useHistory} from 'react-router-dom';
import {addProductToCart} from './Store';


function CategoryCardSubGroup(props) {
    const history = useHistory();
    return (
        <div className="container-fluid" style={{paddingTop:"1%"}}>
            <div className="row">
                <div className="col">
                    <div className="card-group">
                    {
                        typeof props.productsListSports!=="undefined" &&
                    props.productsListSports.slice(0,2).map(product=>{
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
                <div className="col">
                    <div className="card-group">
                    {
                        typeof props.productsListHome!=="undefined" &&
                    props.productsListHome.slice(0,2).map(product=>{
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
            </div>   
        </div>
    )
}


export default (CategoryCardSubGroup);
