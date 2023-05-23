import React,{useEffect, useState} from 'react'
import axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';

const Authorform = () => {
    const [allAuthors, setAllAuthors] = useState([]);
useEffect(() => {
    axios.get("http://localhost:8000/api/authors")
        .then((response) => {
            console.log(response);
            setAllAuthors(response.data.Author);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

const deleteAuthor = (authorId) => {
    axios.delete('http://localhost:8000/api/authors/'+ authorId)
        .then((response) => {
            console.log("success deleting store");
            console.log(response);
const filteredAuthors = allAuthors.filter((author) => {
    return author._id !== authorId;
    });
    setAllAuthors(filteredAuthors);
    })
        .catch((err) => {
        console.log("error filtering store", err.response);
    });
};        

return (
    <div className='container'>
        <h1>Favorite Authors</h1>
        <Link to={`/create`}>Add An Author</Link>
        <p>we have quotes by:</p>
        <div>
            <table className='col-md-6 mx-auto mt-8'>
                <thead className='header'>
                    <tr>
                        <th className='table-header'>Author</th>
                        <th className='table-header'>Edit</th>
                        <th className='table-header'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {allAuthors.map((author, index)=> {
                        return (                  
                                <tr key={author._id}>
                                    <td className='table-fieldbody'>{author.firstName} {author.lastName}</td>
                                    <td className='table-fieldbody'><Link to={`/update/${author._id}`} className='edit-button'><button>Edit</button></Link></td>
                                    <td className='table-fieldbody'><button onClick={(e)=>{deleteAuthor(author._id)}} className="delete-button">Delete</button></td>
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


export default Authorform