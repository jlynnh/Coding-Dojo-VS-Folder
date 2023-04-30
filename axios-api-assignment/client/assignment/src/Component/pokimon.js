import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Pokimon = () => {
    const [poki, setPoki] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(res => {
            console.log(res);
            setPoki(res.data);
        })
        .catch(err => console.log (err))
    }, [])

    return (
    <div>
        <h1>Pokimon Assignment</h1>

    </div>
    )
}

export default pokimon