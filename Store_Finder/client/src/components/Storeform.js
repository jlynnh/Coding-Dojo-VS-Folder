import React,{useEffect, useState} from 'react'
import axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';

const Storeform = () => {
    const [allStores, setAllStores] = useState([]);
useEffect(() => {
    axios.get("http://localhost:8000/api/stores")
        .then((response) => {
            console.log(response);
            setAllStores(response.data.Store);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

const deleteStore = (storeId) => {
    axios.delete('http://localhost:8000/api/stores/'+ storeId)
        .then((response) => {
            console.log("success deleting store");
            console.log(response);
const filteredStores = allStores.filter((store) => {
    return store._id !== storeId;
    });
    setAllStores(filteredStores);
    })
        .catch((err) => {
        console.log("error filtering store", err.response);
    });
};        

return (
    <div className='container'>
        <h1>Store Finder</h1>
        <p>Find a store near you!</p>
        <div>
            <table className='col-md-6 mx-auto mt-8'>
                <thead className='header'>
                    <tr>
                        <th className='table-header'>Store Name</th>
                        <th className='table-header'>Store Number</th>
                        <th className='table-header'>Store Open</th>
                        <th className='table-header'>Delete Store</th>
                    </tr>
                </thead>
                <tbody>
                        {allStores.map((store, index)=> {
                        return (                  
                                <tr key={store._id}>
                                    <td className='table-fieldbody'><Link to={`/storedetail/${store._id}`} className="storelink">{store.storeName}</Link></td>
                                    <td className='table-fieldbody'>{store.storeNumber}</td>
                                    <td className='table-fieldbody'>{`${store.storeOpen}`}</td>
                                    <td className='table-fieldbody'><button onClick={(e)=>{deleteStore(store._id)}} className="deletebutton">Delete</button></td>
                                </tr>
                        )
                        })}     
                </tbody>
            </table>
             <Link to={`/storecreate/`}><button> Can't Find Your Store?</button></Link>
        </div>
    </div>    
);
};

export default Storeform