import React,{useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios';

function UserSignup() {
    const history = useHistory();
    const [error,setError] = useState(false);
    const handleChange = ()=>{
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const mobileNumber = document.getElementById("mobile").value;
        console.log(typeof name);
        console.log(name.length);
        if(name.length==0 || email.length==0 || password.length==0 || mobileNumber==0){
            alert("All input fields area mandatory");
            return
        }
        const userDetails = {
            name,
            email,
            password,
            mobileNumber
        };
        axios.post('http://localhost:8000/user/signup',userDetails)
        .then(response=>{
            console.log(response);
            history.push('/login');
        })
        .catch(err=>{
            console.log(err);
            setError(true);
        })
        
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
                            <h3 className="card-title">Sign Up</h3>
                        </div>
                        <div className="row fieldname">
                            <small><b>Name</b></small>
                        </div>
                        <input className="form-control input_field" id="name"></input>
                        <div className="row fieldname">
                            <small><b>Phone Number</b></small>
                        </div>
                        <input className="form-control input_field" id="mobile"></input>
                        <div className="row fieldname">
                            <small><b>Email</b></small>
                        </div>
                        <input className="form-control input_field" id="email"></input>
                        <div className="row fieldname">
                            <small><b>Password</b></small>
                        </div>
                        <input className="form-control input_field" id="password"></input>
                        <div className="row">
                        <button className="btn btn-success admin_login_button" onClick={handleChange}>Sign Up</button>
                        </div>
                    </div>
                </div>
                {error && <div class="alert alert-danger" role="alert" style={{marginTop:"10%"}}>
                                Error while Signing up 
                            </div>}
            </div>
        </div>
    </div>
    )
}

export default UserSignup;
