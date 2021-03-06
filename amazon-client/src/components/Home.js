import React,{useEffect,useState,useContext} from 'react';
import Navbar from './Navbar';
import '../css/Home.css';
import CategoryCardGroup from './CategoryCardGroup';
import CategoryCardSubGroup from './CategoryCardSubGroup';
import axios from 'axios';

function Home(props) {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/product/products')
        .then(response=>{
            setProducts(response.data.categoryProducts)
        });
    },[]);
    return (
        <>
            <Navbar/>
            <br></br>
            <br/>
            <div>
                <div id="carouselExampleControls" className="carousel slide carousel_contain carousel_manual" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/Nov/BAU/Credit-Card-Bill_1500x600_without._CB415288872_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/CEPC/under1499store/english/Gateway/updated/V242338866_IN_CEPC_Under-1499_store_Graphics_1500x600._CB406499464_.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="container-fluid products_container">
                {products.length===0? <h1>No products in electronics category</h1>:
                     <CategoryCardGroup productsList={products.Electronics}/>
                }
                <CategoryCardSubGroup productsListSports={products.Sports} productsListHome={products.HomeKitchen}/>
                <CategoryCardGroup productsList={products.Books}/>
            </div>
        </>
    )
}


export default (Home);

