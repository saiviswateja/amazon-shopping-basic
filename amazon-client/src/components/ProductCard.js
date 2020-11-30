import React from 'react';
import '../css/ProductCard.css';

function ProductCard(props) {
    const productDetails = props.productDetails;
    console.log(productDetails); 
    return (
        <div className="productCard">
            <div className="card">
                        <img class="card-img-top img_card img_card2" src={productDetails.imageUrl} alt="Card image cap"/>
                        <div class="card-body">
                            <h6>Think Like a Monk</h6>
                            <h5 class="card-text"><span class="text-muted"><b>$ 325</b></span></h5>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
            </div>
        </div>
    )
}

export default ProductCard;
