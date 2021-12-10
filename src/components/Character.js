// Write your Character component here
import React from 'react'

const Character = props => {
    return (
        <div className='character'>
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See details
            </button>
        </div>
  )
}

export default Character;