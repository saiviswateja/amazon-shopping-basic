import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import '../css/Admin.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Admin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const history = useHistory();
    const handleChange = ()=>{
        console.log("came to hande change component event");
        const name = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const loginDetails = {
            name,
            password
        }
        console.log(loginDetails);
        axios.post('http://localhost:8000/admin/signin',loginDetails)
        .then(response=>{
            console.log(response);
            // if(!response.data.success){
            //     settryLoggedIn(true)
            //     return;
            // }
            localStorage.setItem("adminUser",JSON.stringify(response.data.user));
            localStorage.setItem("admintoken",response.data.token);
            history.push('/admin/products');
        });
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
                                <h3 className="card-title">Admin Login</h3>
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
                            <button className="btn btn-warning admin_login_button" onClick={()=>{
                                 console.log("came to hande change component event");
                                 const name = document.getElementById("email").value;
                                 const password = document.getElementById("password").value;
                                 const loginDetails = {
                                     name,
                                     password
                                 }
                                 console.log(loginDetails);
                                 axios.post('http://localhost:8000/admin/signin',loginDetails)
                                 .then(response=>{
                                     console.log(response);
                                     if(!response.data.success){
                                         return;
                                     }
                                    //  localStorage.setItem("user",JSON.stringify(response.data.user));
                                     localStorage.setItem("adminToken",response.data.token);
                                     history.push('/admin/products');
                                 });
                            }}>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
