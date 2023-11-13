import React, { useState } from 'react'
import './board.css'
import { motion } from 'framer-motion'

const ActiveClue = ({ content, answer, title, setIsShowing, setIsAnswered }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  const activeClueEventHandler = (evt) => {
    // avoid all other events
    evt.stopPropagation()

    // extract id
    const id = evt.target.id

    // go back to our jeopardy board 
    // or reveal the answer
    if(id === 'go-back') { 
      // got back to the board items
      setIsShowing(false)
    }
    if(id === 'reveal-answer') {
      setIsRevealed(true)
      setIsAnswered( true )
    }
  }

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
