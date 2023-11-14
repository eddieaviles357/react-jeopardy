import React, { useState } from 'react'
import './board.css'
import { motion } from 'framer-motion'

const ActiveClue = ({ content, answer, setIsAnswered }) => {
  const [isRevealed, setIsRevealed] = useState(false)
  const [isShowing, setIsShowing] = useState(true)
  
  const activeClueEventHandler = (evt) => {
    // avoid all other events
    evt.stopPropagation()

    // extract id
    const id = evt.target.id

    if(id === 'go-back') { 
      // go back to board
      setIsShowing(false)
    }
    if(id === 'reveal-answer') {
      setIsRevealed(true)
      setIsAnswered(true)
    }
  }

  // go back to board
  if(!isShowing) return

  return (
    <div className='Active' onClick={activeClueEventHandler}>
      <div className='clue-choices-container'>
        <span id='go-back'>Go Back</span>
        <span id='reveal-answer'>Reveal Answer</span>
      </div>
      <hr />
      <div className='Active-qa-container'>
        <span className='Active-content'>{ content }</span>
        <span className='Active-revealed'>{ isRevealed && answer }</span>
      </div>
    </div>
  )
}

export default ActiveClue
