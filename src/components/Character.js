// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharacterDiv = styled.div`
    background-color: grey;
    width: 50%;
    margin: auto;
    border-radius: 25px;
h3{
    text-shadow: 1px 1px 5px #fff;
}
button{
    padding: 1%;
    margin: 1%;
    font-weight: bold;
}

`

const Character = props => {

    const{ info, open } = props
   
    return (
        <CharacterDiv>
           <h3>{info.name}</h3>
            
            <button onClick ={open}>
                See Details
            </button>
        </CharacterDiv>
  )
}

export default Character;