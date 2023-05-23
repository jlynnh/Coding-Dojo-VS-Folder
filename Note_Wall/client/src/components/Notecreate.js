import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Notecreate = (props) => {
    // const {note, setNote} = props;
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate ();

const onSubmitHandler = (e) => {
    e.preventDefault();    
    axios.post('http://localhost:8000/api/notes', {
        noteTitle: noteTitle,
        noteBody: noteBody
    })
        .then(res=>{
            console.log("Note created", res); 
            console.log(res.data.Note);
            navigate(`/`)
            // setNote([...note, res.data]);
        })
        .catch(error=> {
            console.log("On submit axios post error catch",error);
            console.log("On submit specific key error msg.", error.response.data.error.errors);
            setErrors(error.response.data.error.errors);            
        })
}

return (
    <div className='container'>
        <h1 className='page-title'>Write Notes</h1>
        <Link to={`/`} className='back-link'>Go Back Home</Link>
        <p className='comment'>Write a new note!</p>
        <form onSubmit={onSubmitHandler} className='form-container'>
            <p>{errors.noteTitle ? errors.noteTitle.message: null}</p>
            <p>
            <label className='note-create'>Note Title:</label><br />
            <input className='note-field' type='text' name='noteTitle' value={noteTitle} onChange={(e) => {setNoteTitle(e.target.value)}}/>
            </p>
            <p>
            <label className='note-create'>Note Body:</label><br />
            <input className='note-fieldb' type='text' name='noteBody' value={noteBody} onChange={(e) => {setNoteBody(e.target.value)}}/>
            </p>
            <button className='button-create'>Write This Note!</button>
        </form>
    </div>
)
}

export default Notecreate