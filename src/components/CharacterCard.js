import React from 'react';
import Character from './Character'
import './CharacterCard.css'

export default function CharacterCard(props){
    // console.log("asi llegan las props: ", props)
    return (
        <div hover={true} className="card" onClick={() => window.location.assign(`http://localhost:3000/character/${props.chars.id}`)}>
            <h2>{props && props.chars.name}</h2>
            <img src={props && props.chars.image} />
        </div>
    )
}