import React from 'react'
import './board.css'

const ActiveClue = ({ content, answer }) => {
  
  const activeClueClickHandler = (evt) => {
    // avoids parents click events to trigger
    evt.stopPropagation()
    const id = evt.target.id
    if(id === 'go-back') { 
      console.log('goback')
    }
    if(id === 'reveal-answer') {
      console.log('reveal-answer')
    }
  }

  const revealAnswer = (evt) => {
    evt.stopPropagation()
    console.log('answer', answer)
  }

  return (
    <div className='active' onClick={activeClueClickHandler}>
      <div className='clue-choice-container'>
        <span id='go-back'>Go Back</span>
        <span id='reveal-answer'>Reveal Answer</span>
      </div>
      { content }
    </div>
  )
}

export default ActiveClue
