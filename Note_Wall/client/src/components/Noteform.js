import React,{useEffect, useState} from 'react'
import axios from 'axios';
import "../App.css";
import { Link } from 'react-router-dom';

const Noteform = () => {
    const [allNotes, setAllNotes] = useState([]);
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
useEffect(() => {
    axios.get("http://localhost:8000/api/notes")
        .then((response) => {
            console.log(response);
            setAllNotes(response.data.Note);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

return (
    <div className='container'>
        <h1 className='page-title'>Note Wall</h1>
        <p>Leave a note!</p>
        <Link to={`/notecreate`}><button> Write Note </button></Link>
        <div>
            <table className='col-md-12 mx-auto mt-4'>
                <thead className='header'>
                    <tr>
                        <th className='table-header'>Wall Note</th>
                        <th className='table-header'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {allNotes.map((note, index)=> {
                        return (                  
                                <tr key={note._id}>
                                    <td className='table-fieldbody'>
                                        <h3 className='note-title'>{note.noteTitle}</h3>
                                        <p className='note-body'>{note.noteBody}</p> 
                                    </td>
                                    <td className='table-fieldbody'><Link to={`/noteupdate/${note._id}`}> Edit </Link></td>
                                </tr>
                            )
                        })
                    }     
                </tbody>
            </table>
        </div>
    </div>    
);
};


export default Noteform