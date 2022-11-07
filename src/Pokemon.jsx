
import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [ pokeDex, setPokeDex ] = useState([])
    const [ errorResponse, setErrorResponse] = useState("")

    const catchEmAll = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=905")
            .then( res => {
                const {results} = res.data
                setPokeDex(results)
            })
            .catch(error => setErrorResponse("Loading..."))
    }
  return (
    <fieldset>
        <legend>Pokemon.jsx</legend>
        <button onClick={catchEmAll}>Get Pokemon</button>
            {errorResponse ? <p>{errorResponse}</p> : null }
            {
                pokeDex.map((oneMon) => <p>{oneMon.name}</p>)
            }
        
    </fieldset>
  )
}

export default Pokemon