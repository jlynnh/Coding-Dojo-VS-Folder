/* eslint-disable no-undef */
import React, {useState} from 'react'
import axios from 'axios'

const dataStyle = {
    borderRadius: "0px",
    backgroundColor: "white",
    border: "1px solid darkgrey",
    padding: "20px",
    margin: "20px",
    width: "700px"
}
const Form = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(Number)
    const [description, setDescription] = useState("")

const createProduct = (e) => {
    e.preventDefault();    
        const newProduct = { 
            title: title, 
            price: price, 
            description: description 
        };
        console.log(newProduct);
    };

    return (
        <div>
            <div className='row'>
                <form action='' className='form-inline' onSubmit={createProduct}>
                    <div className='form-group'>
                        <label htmlFor='title'className='data'>Title:</label>
                        <input type='text' name='title' id='title' className='form-control' onChange={ (e) => setTitle(e.target.value) }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'className='data'>Price:</label>
                        <input type='number' name='price' id='price' className='form-control' onChange={ (e) => setPrice(e.target.value) }/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'className='data'>Description:</label>
                        <input type='text' name='description' id='description' className='form-control' onChange={ (e) => setDescription(e.target.value) }/>
                    </div>
                    <button htmlFor='button' className='button'>Create</button>
                    <input type="submit" value="Create Product" />
                </form>
            </div>
        </div>
    )
}

export default Productform