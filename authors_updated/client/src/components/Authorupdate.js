import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Authorupdate = () => {
    const {id} = useParams();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res => {
            console.log("Response from get 1 in update", res);
            setFirstName(res.data.Author.firstName);
            setLastName(res.data.Author.lastName)
        })
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {
            firstName: firstName,
            lastName: lastName
        })
        .then(res=> {
            console.log(res);
            navigate(`/`);
        })
        .catch (error=> {
            console.log("On submit axios post error catch",error);
            console.log("On submit specific key error msg.", error.response.data.error.errors);
            setErrors(error.response.data.error.errors);
        })
    }
return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={`/`}>Home</Link>
        <p>Edit this author!</p>
        <form onSubmit={updateAuthor}>
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
            <button>Edit Store</button>
        </form>
        <Link to={`/`} className='cancel-button'><button>Cancel</button></Link>
    </div>
)
}

export default Authorupdate