import React, {useState} from 'react'
import './board.css'
import ActiveClue from './ActiveClue'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  
  
  const expandClue = (evt) => {
    setIsShowing( prev => !prev )
    const id = evt.target.id
    // extract index from clue
    const categoryIdx = +id[0]
    const clueIdx = +id[id.length - 1]
  }

  return (
    <div 
      onClick={ expandClue }
      className={`Board-clue ${isAnswered ? 'answered' : ''}`} 
      id={id} >
      { value }
      { isShowing && 
        <ActiveClue 
          question={question} 
          answer={answer} 
          isAnswered={isAnswered}
          setIsAnswered={setIsAnswered} 
          setIsShowing={setIsShowing} /> }
      </div>
  )
}

export default Clue
