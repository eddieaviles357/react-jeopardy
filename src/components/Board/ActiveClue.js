import React, { useState } from 'react'
import './board.css'

const ActiveClue = ({ 
  question, 
  answer, 
  isAnswered,
  setIsAnswered, 
  setIsShowing 
}) => {
  const [isRevealed, setIsRevealed] = useState(false)
  
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

  return (
    <div className='Active' onClick={activeClueEventHandler}>
      <div className='clue-choices-container'>
        <span id='go-back'>Go Back</span>
        <span id='reveal-answer'>Reveal Answer</span>
      </div>
      <hr />
      <div className='Active-qa-container'>
        <span className='Active-content'>{ question }</span>
        <span className='Active-revealed'>{ (isRevealed || isAnswered) && answer }</span>
      </div>
    </div>
  )
}

export default ActiveClue
