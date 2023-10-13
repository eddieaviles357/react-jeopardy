import React from 'react'
import './board.css'

const Clue = ({ id, children }) => {
  return (
    <div className='Board-clue' id={id}>{children}</div>
  )
}

export default Clue
