import React from 'react';
import { useContext } from 'react';
import {Link} from 'react-router-dom';
import UserContext from '../userContext';

function UserLogin() {
    const context = useContext(UserContext);
    const handleChange = ()=>{
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const loginDetails = {
            email,
            password
        }
        context.dispatch({type:"TESTING_REDUX",payload:{loginDetails}});
    }
    return (
        <div>
            <div>
                <div className="row logo_admin">
                    <Link class="navbar-brand" href="#"><img src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" style={{height:'50px',width:'150px',paddingTop:"5%",paddingRight:"10%"}}></img></Link>
                </div>
                <div className="row logo_admin">
                    <div className="card" style={{width:"20rem"}}>
                        <div className="card-body">
                            <div className="row title">
                                <h3 className="card-title">User Login</h3>
                            </div>
                            <div className="row fieldname">
                                <small><b>Email or mobile phone number</b></small>
                            </div>
                            <input className="form-control input_field" id="email"></input>
                            <div className="row fieldname">
                                <small><b>Password</b></small>
                            </div>
                            <input className="form-control input_field" id="password"></input>
                            <div className="row">
                            <button className="btn btn-warning admin_login_button" onClick={handleChange}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;
