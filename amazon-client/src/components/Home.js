import React,{useEffect,useState} from 'react';
import Navbar from './Navbar';


function Home() {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        
    });
    return (
        <>
            <Navbar/>
            <div className="container-fluid">
                <div className="card">
                    <div className="row">
                        <div className="col">
                            <div>

                            </div>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
