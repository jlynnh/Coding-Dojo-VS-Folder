/* eslint-disable no-undef */
import React, {useState} from 'react'
import axios from 'axios'

const ProductForm = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

const onSubmitHandler = (e) => {
    e.preventDefault();    
    axios.post('http://localhost:8000/api/products', {
        title: title,
        price: price,
        description: description
    })
        .then(res=>{
            console.log(res); 
            console.log(res.data.Product);

        setProduct([...product, res.data.Product]);  
        })
        .catch(err=>console.log(err))
}

    return (
        <div>
            <div className='row'>
                <form action='' className='form-inline' onSubmit={onSubmitHandler}>
                    <div className='header'>
                        <h1>Product Manager</h1>
                    </div>
                    <div className='form-group-title'>
                        <label htmlFor='title'className='title'>Title:</label>
                        <input type='text' name='title' id='data' className='form-control-title' onChange={ (e) => setTitle(e.target.value) }/>
                    </div>
                    <div className='form-group-price'>
                        <label htmlFor='price'className='price'>Price:</label>
                        <input type='text' name='price' id='data' className='form-control-price' onChange={ (e) => setPrice(e.target.value) }/>
                    </div>
                    <div className='form-group-description'>
                        <label htmlFor='description'className='description'>Description:</label>
                        <input type='text' name='description' id='data' className='form-control-description' onChange={ (e) => setDescription(e.target.value) }/>
                    </div>
                    <div className="container">
                        <button htmlFor='button' className='button-productform' onClick={()=> alert("Product has been created!")}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ProductForm