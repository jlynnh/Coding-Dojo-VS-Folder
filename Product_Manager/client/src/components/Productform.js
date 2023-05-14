import React, {useState, useEffect} from 'react'
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
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div>
            <div className='row'>
                <form action='' className='form-inline'>
                    <div className='form-group'>
                        <label htmlFor='title'className='data'>Title:</label>
                        <input type='text' name='title' id='title' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='price'className='data'>Price:</label>
                        <input type='number' name='price' id='price' className='form-control'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='description'className='data'>Description:</label>
                        <input type='text' name='description' id='description' className='form-control' onChange={ (e) => setDescription(e.target.value) }/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Productform; 