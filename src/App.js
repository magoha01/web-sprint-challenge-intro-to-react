import React from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import { useState, useEffect } from 'react';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharId, setCurrentCharId] = useState(null)

  const openDetails = id => {
    setCurrentCharId(id)
  }

  const closeDetails = () => {
    setCurrentCharId(null)
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        setCharacters(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {characters.map(character =>{
          return <Character info={character} />

          }
        
        )}
        {
        //currentCharId && <Details charId={currentCharId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
