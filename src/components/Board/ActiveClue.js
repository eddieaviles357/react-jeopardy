import React, { useState } from 'react'
import './board.css'

const ActiveClue = ({ content, answer }) => {
  const [isRevealed, setIsRevealed] = useState(false);
  
  const activeClueEventHandler = (evt) => {
    // avoid all other events
    evt.stopPropagation()

    // extract id
    const id = evt.target.id

    // go back to our jeopardy board 
    // or reveal the answer
    if(id === 'go-back') { 
      console.log('goback')
    }
    if(id === 'reveal-answer') {
      setIsRevealed(true)
    }
  }

  return (
    <div className='Active' onClick={activeClueEventHandler}>
      <div className='clue-choices-container'>
        <span id='go-back'>Go Back</span>
        <span id='reveal-answer'>Reveal Answer</span>
      </div>
      <hr />
      <span className='Active-content'>{ content }</span>
      <span className='Active-revealed'>{ isRevealed && answer }</span>
    </div>
  )
}

export default ActiveClue
