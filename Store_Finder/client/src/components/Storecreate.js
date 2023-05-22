import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Storecreate = (props) => {
    // const {store, setStore} = props;
    const [storeName, setStoreName] = useState("");
    const [storeNumber, setStoreNumber] = useState(0);
    const [storeOpen, setStoreOpen] = useState(true);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate ();

const onSubmitHandler = (e) => {
    e.preventDefault();    
    axios.post('http://localhost:8000/api/stores', {
        storeName: storeName,
        storeNumber: storeNumber,
        storeOpen: storeOpen
    })
        .then(res=>{
            console.log("Store just created", res); 
            console.log(res.data.Store);
            navigate(`/storedetail/${res.data.Store._id}`)
            // setStore([...store, res.data]);
        })
        .catch(error=> {
            console.log("On submit axios post error catch",error);
            console.log("On submit specific key error msg.", error.response.data.error.errors);
            setErrors(error.response.data.error.errors);
            
        })
}

return (
    <div>
        <h1>Store Finder</h1>
        <Link to={`/`}>Go Back Home</Link>
        <p>Add a new store!</p>
        <form onSubmit={onSubmitHandler}>
            <p>{errors.storeName ? errors.storeName.message: null}</p>
            <p>
            <label>Store Name:</label><br />
            <input type='text' name='storeName' value={storeName} onChange={(e) => {setStoreName(e.target.value)}}/>
            </p>
            <p>{errors.storeNumber ? errors.storeNumber.message: null}</p>
            <p>
            <label>Store Number:</label><br />
            <input type='text' name='storeNumber' value={storeNumber} onChange={(e) => {setStoreNumber(e.target.value)}}/>    
            </p>
            <p>
            <label>Store Open</label><br />
            <input type= 'checkbox' checked= {storeOpen} onChange={(e) => {setStoreOpen(!storeOpen)}}/>
            {/* <input type='text' name='storeOpen' value={storeOpen} onChange={(e) => {setStoreOpen(e.target.value)}}/>     */}
            </p>
            <button>Add A New Store</button>
        </form>
    </div>
)
}

export default Storecreate