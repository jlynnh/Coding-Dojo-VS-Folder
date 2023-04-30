import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = () => {

    const [pokemon, setPokemon] = useState([]);

    useEffect (() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
        .then(res => {
            console.log(res);
            setPokemon(res.data.results);
        })
        .catch(err => console.log(err))
    }, [])

    return (
    <div>
        <h1>Pokemon</h1>
        {pokemon.map((poke, i) => {
            return (
                <div key={i}>
                    <p>{poke.name}</p>
                </div>
            )
        })}
    </div>
    )
}

export default Pokemon