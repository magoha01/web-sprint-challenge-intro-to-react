import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const DetailDiv= styled.div`
    background-color: white;
`

export default function Details(props) {

    const {charId, close } = props;
    const [charDetails, setCharDetails] = useState([]);
   
    useEffect(() => {
       
        axios.get('https://swapi.dev/api/people/', charId)
        .then(res =>{
           setCharDetails(res.data)
        })
        .catch(err => {
          debugger;
        })
        }

, [charId])

    return (
        <DetailDiv>
        
             <h2>Details of {charDetails.name}:</h2>
          
            charDetails &&
            <>
            <p>{charDetails.name} is {charDetails.age} years old.</p>
            <p>Their Birth year is {charDetails.birth_year}</p>
            <p>Homeworld is {charDetails.homeworld}</p>
            <button onClick={close}>Close</button>
            </>
        </DetailDiv>
      )
    }
    
  