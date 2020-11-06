import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Character.css'


export default function Character(props){
    const [character, setCharacter] = useState()
    console.log(props)

    useEffect(async() => {
        await Axios.get(`https://rickandmortyapi.com/api${props.location.pathname}`)
        .then(response => {
            console.log(response)
            setCharacter(response.data)
        })
    }, [])
    
    return (
        <div className="char">
            {character && <h1>character {"=>" +" " + character.name + "<="}</h1>}
            {character && <img src={character.image} alt=""/>}
            <div className="infoChar">
                {character && <h4>{character.gender}</h4>}
                {character && <h4>Originario de{" " + character.origin.name}</h4>}
                {character && <h4>Ahora vive en{" " + character.location.name}</h4>}
                {character && <h4>Genero{" " + character.gender}</h4>}
            </div>
        </div>
    )
}