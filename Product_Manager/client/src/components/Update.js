import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const navigate = useNavigate();
    const {product} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log("Response from get 1 in update", res);
            setTitle(res.data.Product.title);
            setPrice(res.data.Product.price);
            setDescription(res.data.Product.description);
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            title: title,
            price: price,
            description: description
        })
        .then(res=> {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err))
    }

return (
    <div>
        <h1>Update a Product</h1>
        <form onSubmit={updateProduct}>
            <p>
            <label>Title</label><br />
            <input type='text' name='title' value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </p>
            <p>
            <label>Price</label><br />
            <input type='text' name='price' value={price} onChange={(e) => {setPrice(e.target.value)}}/>    
            </p>
            <p>
            <label>Description</label><br />
            <input type='text' name='description' value={description} onChange={(e) => {setDescription(e.target.value)}}/>    
            </p>
            <button>Update</button>
        </form>
    </div>
)
}

export default Update