import React from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import Details from './components/Details'
import { useState, useEffect } from 'react';
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentChar, setCurrentChar] = useState(null)
  
  const openDetails = (key) => {
    setCurrentChar(key)
  }

  const closeDetails = () => {
    setCurrentChar(null)
  }

  useEffect(() => {
    const fetchCharacters = () =>{
    axios.get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchCharacters()
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {characters.map((character, index) =>{ 
          return <Character key={index} info={character} open={openDetails}  />
          }
        )}
        {
       currentChar && <Details charId={currentChar} close={closeDetails} />
    }  
    </div>
  
  );
}
export default App;
