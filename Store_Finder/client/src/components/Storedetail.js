import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import { useParams, Link } from 'react-router-dom';


const Storedetail = (props) => {
    const [store, setStore] = useState({})
    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/stores/${id}`)
        .then(res => {
            console.log(res);
            setStore(res.data.Store);
        })
        .catch( err => console.log(err));
    }, [id]);

return (
    <div>
        <h1>Store Details</h1>
        <Link to={`/`}>Go Back Home</Link>
        <p>Store Name: {store.storeName}</p>
        <p>Store Number: {store.storeNumber}</p>
        <p>Store Open: {`${store.storeOpen}`}</p>
        <Link to={`/storeupdate/${store._id}`}><button> Edit Store Details</button></Link>
    </div>)
}

export default Storedetail