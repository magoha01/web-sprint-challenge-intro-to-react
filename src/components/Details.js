import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
export default function Details(props) {

    const {charId, close } = props;
    const [charDetails, setCharDetails] = useState([]);
   
    useEffect(() => {
        //runs after 1st render for sure, then after every random dom surgery
        //caused by a change in friendId
       
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
        <div className='container'>
        
             <h2>Details of {charDetails.name}:</h2>
          
            charDetails &&
            <>
            <p>{charDetails.name} is {charDetails.age}</p>
            <p>height is {charDetails.name}</p>
            <button onClick={close}>Close</button>
            </>
        </div>
      )
    }
    
  