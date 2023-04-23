import React, {useState} from 'react';
import './App.css';


const PersonCard = (props) => {
    const[ newAge, setNewAge ] = useState (props.age)
  return (
    <div>
        <h2>{props.lastName}, {props.firstName}</h2>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button className="btn btn-primary mt-3" onClick={ (event) => setNewAge(newAge + 1) }>Birthday Button for {props.firstName} {props.lastName}</button>
    </div>
  )
}



export default PersonCard