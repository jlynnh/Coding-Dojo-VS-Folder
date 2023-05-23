import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

const Noteupdate = (props) => {
    const {id} = useParams();
    const {removeFromDom, note, setNote} = props;
    const [noteTitle, setNoteTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const deleteNote = (noteId) => {
        axios.delete(`http://localhost:8000/api/notes/${id}`)   
        .then(response => {
                console.log(response);
                removeFromDom(noteId);
        })
            .catch(error => console.log(error))
    }
    useEffect(() => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(response => {
            console.log(response);
            setNoteTitle(response.data.Note.noteTitle);
            setNoteBody(response.data.Note.noteBody);
        })
        .catch(err => console.log(err))
    }, []);
    const updateExistingNote = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/notes/${id}`, {
            noteTitle: noteTitle,
            noteBody: noteBody,
        })
        .then(response => {
            console.log(response);
            navigate(`/`);
        })
        .catch (error=> {
            console.log("On submit axios post error catch",error);
            console.log("On submit specific key error msg.", error.response.data.error.errors);
            setErrors(error.response.data.error.errors);
        });
    
    };
return (
    <div className='container'>
        <h1 className='page-title'>Note</h1>
        <Link to={`/`} className='back-link'>Go Back Home</Link>
            <form onSubmit={updateExistingNote} className='form-container'>
                <p>{errors.noteTitle ? errors.noteTitle.message: null}</p>
                <p>
                    <label className='note-create'>Note Title:</label><br />
                    <input className='note-field' type='text' name='noteTitle' value={noteTitle} onChange={(e) => {setNoteTitle(e.target.value)}}/>
                </p>
                <p>{errors.noteBody ? errors.noteBody.message: null}</p>
                <p>
                    <label className='note-create'>Note Body:</label><br />
                    <input className='note-fieldb' type='text' name='noteBody' value={noteBody} onChange={(e) => {setNoteBody(e.target.value)}}/>
                </p>
                <button className='button-edit'>Edit Note</button>
            </form>
        <Link to={`/`}><button onClick={(e)=>{deleteNote(id)}} className="button-delete" >Delete Note</button></Link>       
    </div>
)
}

export default Noteupdate