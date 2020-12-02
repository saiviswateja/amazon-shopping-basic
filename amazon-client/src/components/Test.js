import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Navbar from './Navbar';

function Test(props) {
    useEffect(()=>{
        console.log(props);
    })
    return (
        <div>
            <Navbar/>
        </div>
    )
}

const mapStateToProps = state=>{
    console.log(state);
    return state;
  }

export default connect(mapStateToProps)(Test);
