import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import {Link,useHistory} from 'react-router-dom';

function Checkout() {
    const [productArray,setProductArray] = useState([]);
    const [price,setPrice] = useState(0);
    useEffect(() => {
        console.log(productArray);
        setProductArray(JSON.parse(localStorage.getItem("products")));
    }, [])
    useEffect(() => {
        totalPrice();
        localStorage.setItem("products",JSON.stringify(productArray));
    }, [productArray])
    const totalPrice= ()=>{
        var t = 0;
        productArray.map(product=>{
            console.log(product.price);
            t = t+ parseInt(product.price);
        });
        setPrice(t);
    }
    // const removeProduct = (_id)=>{
    //     console.log("came here to remove product");
    //     console.log(productArray);
    //     var t = 0;
    //     setProductArray(productArray.filter((prod)=>{
    //         if(prod._id!==_id){
    //             t= t+ prod.price;
    //             return prod;
    //         }
    //     }));
    //     setPrice(t);
    //     console.log(productArray);
    // }

    const removeProduct = (index)=>{
        setPrice(price-productArray[index]-1);
        var prodArray = [];
        for(var i=0;i<productArray.length;i++){
            if(i==index){
                continue;
            }
            prodArray.push(productArray[i])
        }
        setProductArray(prodArray);
    }
    return (
        <div>
            <Navbar/>    
            <br/>
            <br/>
            
            <div className="container-fluid">
                <div className="row" style={{backgroundColor:"white"}}>
                    <div className="col">
                        {typeof productArray.length!=="undefined" &&
                        <div style={{marginTop:"2%"}}>
                            <h1>Checkout</h1>
                            <div className="container-fluid scroll">
                                {console.log(productArray)}
                                {
                                    productArray.map(product=>{
                                        return <div className="row" style={{paddingBottom:"2%"}}>
                                                    <div className="col">
                                                        <img src={product.imageUrl}></img>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row">
                                                            <h5 className='col float-right'>{product.productName}</h5>
                                                        </div>
                                                        <div className="row">
                                                            <h5 className="col">$ {product.price}</h5>
                                                        </div>
                                                        <div className="row">
                                                            <button className="btn btn-warning col"  onClick={()=>removeProduct(productArray.indexOf(product))}>Remove from Cart</button>
                                                        </div>    
                                                    </div>
                                                </div>
                                    })
                                }
                            </div>
                        </div>
                        }
                    </div>
                    <div className="col">
                        <div class="jumbotron">
                    <h1 class="display-4">Total Price: {price}</h1>
                            <p class="lead">Hi Viswa, Dont worry they will be get delivered to your door as soon as possible</p>
                            <hr class="my-4"/>
                            <p>You have {productArray.length} in your cart</p>
                            <p class="lead">
                                {
                                    price===0?
                                    <Link class="btn btn-primary btn-lg" role="button" to="/products">Select products</Link>
                                    :
                                    <a class="btn btn-primary btn-lg" role="button">Place Order</a>    
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}

export default Checkout
