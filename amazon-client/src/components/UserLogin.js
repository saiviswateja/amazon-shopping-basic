import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link,useHistory} from 'react-router-dom';


function UserLogin() {
    const history = useHistory();
    const [tryLoggedIn,settryLoggedIn] = useState(false);
    useEffect(()=>{
        if(localStorage.getItem("user")!==null){
            history.push('/')
        }
    },[])
    const handleChange = ()=>{
        console.log("came ere");
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const loginDetails = {
            email,
            password
        }
        console.log("respone");
        axios.post('http://localhost:8000/user/signin',loginDetails)
        .then(response=>{
            console.log(response);
            if(!response.data.success){
                settryLoggedIn(true)
                return;
            }
            localStorage.setItem("user",JSON.stringify(response.data.user));
            localStorage.setItem("token",response.data.token);
            history.push('/');
        });
    }
    return (
        <div>
            <div>
                <div className="row logo_admin">
                    <Link class="navbar-brand" to="/"><img src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" style={{height:'50px',width:'150px',paddingTop:"5%",paddingRight:"10%"}}></img></Link>
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
                            {tryLoggedIn && <div class="alert alert-danger" role="alert" style={{marginTop:"10%"}}>
                                Invalid Credentials
                            </div>}
                            <hr></hr>
                            <div>
                                <button style={{marginLeft:"15%"}} onClick={()=>{
                                    history.push('/signup');
                                }}>Create an Account</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserLogin;
