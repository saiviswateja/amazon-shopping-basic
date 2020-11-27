import {useEffect} from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

function ProductsPage(props){
    useEffect(() => {
        console.log(props.products)
    }, [])
    return (
        <>
            <Navbar/>
        </>
    )
}

const MapStateToProps = (state)=>{
    return {
        products:state.products,
        user:state.user
    }
}


export default connect(MapStateToProps,null)(ProductsPage);