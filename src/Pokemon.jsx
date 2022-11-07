
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Pokemon = () => {

    const [ pokeDex, setPokeDex ] = useState([])
    const [ errorResponse, setErrorResponse] = useState("")

    useEffect (() => {
        catchEmAll()
    }, [])

    const catchEmAll = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/?limit=905")
            .then( res => {
                const {results} = res.data
                console.log(results)
                setPokeDex(results)
            })
            .catch(error => setErrorResponse("Loading..."))
    }

    const releaseEmAll = () => {
        setPokeDex([])
    }
  return (
    <fieldset>
        <legend>Pokemon.jsx</legend>
        <div style = {{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <div style = {{ display: "flex", padding: 10}}>
                <button style = {{width: 132, marginRight: 10}} onClick={catchEmAll}>Get Pokemon</button>
                <button style = {{width: 132}} onClick={releaseEmAll}>Clear</button>
            </div>
                {errorResponse ? <p>{errorResponse}</p> : null }
                {
                    pokeDex.map((oneMon) => <span>{oneMon.name}</span>)
                }
        </div>
    </fieldset>
  )
}

export default Pokemon