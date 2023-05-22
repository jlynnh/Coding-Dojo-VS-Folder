import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Storeupdate = () => {
    const {id} = useParams();
    const [storeName, setStoreName] = useState("");
    const [storeNumber, setStoreNumber] = useState("");
    const [storeOpen, setStoreOpen] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
        .then(res => {
            console.log("Response from get 1 in update", res);
            setStoreName(res.data.Store.storeName);
            setStoreNumber(res.data.Store.storeNumber);
            setStoreOpen(res.data.Store.storeOpen);
        })
        .catch(err => console.log(err))
    }, [])

    const updateStore = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/stores/${id}`, {
            storeName: storeName,
            storeNumber: storeNumber,
            storeOpen: storeOpen
        })
        .then(res=> {
            console.log(res);
            navigate(`/storedetail/${id}`);
        })
        .catch (error=> {
            console.log("On submit axios post error catch",error);
            console.log("On submit specific key error msg.", error.response.data.error.errors);
            setErrors(error.response.data.error.errors);
        })
    }
return (
    <div>
        <h1>Store Finder</h1>
        <Link to={`/`}>Go Back Home</Link>
        <p>Edit this store!</p>
        <form onSubmit={updateStore}>
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
            </p>
            <button>Edit Store</button>
        </form>
    </div>
)
}


export default Storeupdate