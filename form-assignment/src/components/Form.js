import React, {useState} from 'react'

//please note that I did not get lines 5-12 correct.  my formatting is in app.css file.  i am trying out this way after checking my work.

const dataStyle = {
    borderRadius: "0px",
    backgroundColor: "white",
    border: "1px solid darkgrey",
    padding: "20px",
    margin: "20px",
    width: "700px"
}

//please note that I did not get rows 48-63 all the way correct.  I had the {} inside the p tag instead of outside and did not use lable.
const Form = (props) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <div>
            <div className='row'>
                <form action='' className='form-inline'>
                    <div className='form-group'>
                        <label htmlFor='firstName'className='data'>First Name:</label>
                        <input type='text' name='firstName' id='firstName' className='form-control' onChange={ (e) => setFirstName(e.target.value) }/>
                    </div>
                    {firstName.length < 2 && firstName.length > 0 ? (
                        <p>First name must be at least 2 characters</p>
                    ) : null }
                    <div className='form-group'>
                        <label htmlFor='lastName'className='data'>Last Name:</label>
                        <input type='text' name='lastName' id='lastName' className='form-control' onChange={ (e) => setLastName(e.target.value) }/>
                    </div>
                    {lastName.length < 2 && lastName.length > 0 ? (
                        <p>Last name must be at least 2 characters</p>
                    ) : null }
                    <div className='form-group'>
                        <label htmlFor='email'className='data'>Email:</label>
                        <input type='text' name='email' id='email' className='form-control' onChange={ (e) => setEmail(e.target.value) }/>
                    </div>
                    {email.length < 2 && email.length > 0 ? (
                        <p>Email must be at least 2 characters</p>
                    ) : null }
                    <div className='form-group'>
                        <label htmlFor='password'className='data'>Password:</label>
                        <input type='text' name='password' id='password' className='form-control' onChange={ (e) => setPassword(e.target.value) }/>
                    </div>
                    {password.length < 8 && password.length > 0? (
                        <p>Password must be at least 8 characters</p>
                    ) : null }
                    <div className='form-group'>
                        <label htmlFor='confirm'className='data'>Confirm Password:</label>
                        <input type='text' name='confirm' id='confirm' className='form-control' onChange={ (e) => setConfirmPassword(e.target.value) }/>
                    </div>
                    {confirmPassword !== password ? (
                        <p>Passwords must match</p>
                    ) : null }
                </form>
                <div style={ dataStyle }>
                    <h1 style={{ textAlign: 'left' }}>Your Form Data</h1>
                    <p style={{ textAlign: 'left' }}> 
                        <label>First Name:</label> {firstName}
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        <label>Last Name:</label> {lastName}
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        <label>Email:</label> {email}
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        <label>Password:</label> {password}
                    </p>
                    <p style={{ textAlign: 'left' }}>
                        <label>Confirm Password:</label> {confirmPassword}
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Form