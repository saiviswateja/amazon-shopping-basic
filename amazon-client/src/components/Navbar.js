import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg">
            <Link class="navbar-brand" href="#"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" style={{height:'50px',width:'150px',paddingTop:"5%",paddingRight:"10%"}}></img></Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <input class="form-control searchInput" type="search" placeholder="Search" aria-label="Search"/>
                <SearchIcon className="searchIcon" fontSize="large"/>
                <ul class="navbar-nav mr-auto">
                    
                    <li class="nav-item hello_signin">
                        <div>
                            <div className="row">
                                Hello, 
                            </div>
                            <div className="row font-weight-bold">
                                Sign In 
                            </div>
                        </div>
                    </li>
                    <li class="nav-item hello_signin">
                        <div>
                            <div className="row">
                                Try, 
                            </div>
                            <div className="row font-weight-bold">
                                Prime Memberhip 
                            </div>
                        </div>
                    </li>
                    <li class="nav-item basket">
                        <ShoppingBasketIcon fontSize="large" className="font-weight-bold"/>
                        <span className="font-weight-bold count_product">0</span>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
