import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';
import '../css/Home.css';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import { Button } from '@material-ui/core';

function Home() {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        setProducts(
            [
                {
                    "_id": "5faebefec95fcf5474ec54b5",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faec39cdb08570ab4da6c37",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf6d1c2cab3f287cfd766b",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf786b753afa5eb4212c1a",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7893dbda6e5f5c480f7a",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf78ece49f445c48b558b2",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf791b6659eb13e8411d7b",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7b4a053b572d4403a68a",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7b4a053b572d4403a68b",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7b4a053b572d4403a68c",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c6f053b572d4403a68d",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c6f053b572d4403a68e",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c6f053b572d4403a68f",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c7da3dad10d842bd9ce",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c7da3dad10d842bd9cf",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c7da3dad10d842bd9d0",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c963030de180ca7aebc",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c963030de180ca7aebd",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7c963030de180ca7aebe",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7cc61efa3e3048f1654f",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7cc61efa3e3048f16550",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7cc61efa3e3048f16551",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7ce4d36aae32e49deed6",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7ce4d36aae32e49deed7",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7ce4d36aae32e49deed8",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d028a5d535e645ed0d3",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d028a5d535e645ed0d4",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d028a5d535e645ed0d5",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d377cd27258f07a62bd",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d377cd27258f07a62be",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d377cd27258f07a62bf",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d50e49e115bb8087cf0",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d50e49e115bb8087cf1",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d50e49e115bb8087cf2",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d858a5e0b48ec33ec17",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d858a5e0b48ec33ec18",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7d858a5e0b48ec33ec19",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7dc9509640489cb01025",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7dc9509640489cb01026",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7dc9509640489cb01027",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7df5371c0c1e20968b89",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7df5371c0c1e20968b8a",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7df5371c0c1e20968b8b",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7f60e6b3d11b7ccdd393",
                    "productName": "Lenovo Think pad",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7f60e6b3d11b7ccdd394",
                    "productName": "Poco M2 pro",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                },
                {
                    "_id": "5faf7f60e6b3d11b7ccdd395",
                    "productName": "Asus vivo book",
                    "category": "Mobile",
                    "price": 120000,
                    "imageUrl": "https://google.com",
                    "description": "8gb ram with powerful battery and have good reliabilty",
                    "__v": 0
                }
            ]
        );
        console.log(products)
    });
    return (
        <>
            <Navbar/>
            <div>
                <div id="carouselExampleControls" class="carousel slide carousel_contain carousel_manual" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" class="d-block w-100" alt="..."/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under-1499_store_Graphics_1500x600._CB406499464_.jpg" class="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container-fluid products_container">
                <div className="card-group">
                    <div className="card">
                        <img class="card-img-top img_card" src="https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h6>Think Like a Monk</h6>
                            <h5 class="card-text"><span class="text-muted"><b>$ 325</b></span></h5>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
                    <div className="card">
                        <img class="card-img-top img_card" src="https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h6>Think Like a Monk</h6>
                            <h5 class="card-text"><span class="text-muted"><b>$ 325</b></span></h5>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
                    <div className="card">
                        <img class="card-img-top img_card" src="https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h6>Think Like a Monk</h6>
                            <h5 class="card-text"><span class="text-muted"><b>$ 325</b></span></h5>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
                    <div className="card">
                        <img class="card-img-top img_card" src="https://images-eu.ssl-images-amazon.com/images/I/41gVhoPaE5L._AC_SX184_.jpg" alt="Card image cap"/>
                        <div class="card-body">
                            <h6>Think Like a Monk</h6>
                            <h5 class="card-text"><span class="text-muted"><b>$ 325</b></span></h5>
                            <button className="btn btn-warning">Add to Cart</button>
                        </div>
                    </div>
                    <div className="view">
                    <Button title="View More of this category" className="view_button"><PlayCircleFilledRoundedIcon fontSize="large" className="view_product"></PlayCircleFilledRoundedIcon></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
