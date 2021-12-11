// Write your Character component here
import React from 'react'

import styled from 'styled-components'

const Character = props => {

    const{ info, open } = props
   
    return (
        <div className='character'>
            {info.name}
            
            <button onClick ={open}>
                See Details
            </button>
        </div>
  )
}

export default Character;