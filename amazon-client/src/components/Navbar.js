import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {useHistory} from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { AnimationWrapper } from 'react-hover-animation';

function Navbar() {
    const [user,setUser] = useState(null);
    const [inCheckout,setIncheckout] = useState(false);
    const [userLoggedIn,setuserLoggedIn] = useState(false);
    const [cartCount,setCartCount] = useState(0);
    const history = useHistory();
    useEffect(()=>{
        console.log(window.location.href);
        if(window.location.href.includes("checkout")){
            setIncheckout(true)
        }
        if(localStorage.getItem("user")!==null){
            setUser(JSON.parse(localStorage.getItem("user")));
            setuserLoggedIn(true);
        }
        if(localStorage.getItem("products")!==null && Array.isArray(JSON.parse(localStorage.getItem("products")))){
            setCartCount(JSON.parse(localStorage.getItem("products")).length);
        }
    },[])
    useEffect(() => {
        
    }, [cartCount])
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg">
            <Link class="navbar-brand" to="/"><img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" style={{height:'50px',width:'150px',paddingTop:"5%",paddingRight:"10%"}}></img></Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                <input class="form-control searchInput" type="search" placeholder="Search" aria-label="Search"/>
                <SearchIcon className="searchIcon" fontSize="large"/>
                <ul class="navbar-nav mr-auto">
                    
                    <li class="nav-item hello_signin hello_nav">
                        <AnimationWrapper>
                        <div>
                            <div className="row">
                                Hello, 
                            </div>
                            <div className="row font-weight-bold">
                                {user===null?<span onClick={()=>{
                                    history.push('/login');
                                }}>Sign In</span>:<span title="click here log out" onClick={()=>{
                                    localStorage.clear();
                                    history.push('/login');
                                }}>{user.name}<ExitToAppIcon/></span>}
                            </div>
                        </div>
                        </AnimationWrapper>
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
                    <AnimationWrapper>
                    <li class="nav-item basket" onClick={()=>{
                        if(localStorage.getItem("token")==null){
                            history.push('/login');
                            return
                        }
                        history.push('/checkout');
                    }}>
                        <ShoppingBasketIcon fontSize="large" className="font-weight-bold"/>
                        {/* {!inCheckout ? <h1></h1>:<span className="font-weight-bold count_product">{cartCount}</span>} */}
                    </li>
                    </AnimationWrapper>
                </ul>
            </div>
            </nav>
        </div>
    )
}

export default Navbar;
