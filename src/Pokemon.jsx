
import React, { useState } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [ pokeDex, setPokeDex ] = useState([])
    const [ errorResponse, setErrorResponse] = useState("")

    const catchEmAll = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=905")
            .then( res => {
                const {results} = res.data
                console.log(results)
                setPokeDex(results)
            })
            .catch(error => setErrorResponse("Loading..."))
    }
  return (
    <fieldset>
        <legend>Pokemon.jsx</legend>
        <div style = {{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <button style = {{width: 132}} onClick={catchEmAll}>Get Pokemon</button>
                {errorResponse ? <p>{errorResponse}</p> : null }
                {
                    pokeDex.map((oneMon) => <span>{oneMon.name}</span>)
                }
        </div>
    </fieldset>
  )
}

export default Pokemon