import React, { useEffect, useState} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import './CharacterList.css'

export default function CharList(){
    const [characterList, setCharacterList] =useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character?page=30")
        .then(response => {
            console.log(response)
            setCharacterList(response.data.results)
        })
        .catch(error => {
            console.log(error.message)
        })
    }, [])

    return (
        <div>
            <h1>CharacterList</h1>
            <div className="list">
                {characterList && characterList.map((chars, id) => {
                    return <CharacterCard key={id} chars={chars}/>
                    
                })}
            </div>
        </div>
    )
}