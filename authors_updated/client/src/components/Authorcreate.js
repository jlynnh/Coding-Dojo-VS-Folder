import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Authorcreate = (props) => {
    // const {store, setStore} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate ();

const onSubmitHandler = (e) => {
    e.preventDefault();    
    axios.post('http://localhost:8000/api/authors', {
        firstName: firstName,
        lastName: lastName
    })
        .then(res=>{
            console.log("Author created", res); 
            console.log(res.data.Author);
            navigate(`/`)
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
        <Link to={`/`}><button>Home</button></Link>
        <p>Add a new author!</p>
        <form onSubmit={onSubmitHandler}>
            <p>{errors.firstName ? errors.firstName.message: null}</p>
            <p>
            <label>First Name:</label><br />
            <input type='text' name='firstName' value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            </p>
            <p>{errors.lastName ? errors.lastName.message: null}</p>
            <p>
            <label>Last Name:</label><br />
            <input type='text' name='lastName' value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>    
            </p>
            <button>Submit</button>
        </form>
        <Link to={`/`} className='cancel-button'><button>Cancel</button></Link>
    </div>
)
}


export default Authorcreate