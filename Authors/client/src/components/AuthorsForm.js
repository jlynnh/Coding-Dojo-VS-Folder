import React, {useState} from 'react'
import axios from 'axios'

const AuthorsForm = (props) => {
    const {authors, setAuthors} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <div>
            <div className='row'>
                
            </div>
        </div>
    )
}

export default AuthorsForm