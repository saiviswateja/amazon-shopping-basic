import React,{useState,useRef} from 'react';
import axios from 'axios';


function AddProducts() {
    const [file, setFile] = useState('');

    const [progress, setProgess] = useState(0);
    const el = useRef(); 
    const handleChange=(e)=>{
            setProgess(0);
            const file = e.target.files[0];
            console.log(file);
            setFile(file);
    }
    const onUploadButtonPressed = () => {
        const formData = new FormData();        
        formData.append('file', file); // appending file
        axios.post('http://localhost:8000/admin/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            alert("Successfully stored the products");
        }).catch(err => console.log(err))}
    return (
        <div className="row logo_admin">
                    <div className="card" style={{width:"30rem",marginTop:"10%"}}>
                        <div className="card-body card__body">
                            <div className="container">
                            <div className="row logo_admin">
                            <h5>Select the csv file with product details to store them</h5>
                            </div>
                            <div className="row" style={{marginTop:"10%"}}>
                            <input type="file" ref={el} onChange={handleChange} className="form-control"></input>
                            </div>
                            <div className="row">
                            <button className="btn btn-primary button_addproduct" style={{marginTop:"10%"}} onClick={onUploadButtonPressed}>Upload</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default AddProducts
