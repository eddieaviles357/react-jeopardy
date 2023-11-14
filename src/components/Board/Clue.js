import React, {useState} from 'react'
import './board.css'
import ActiveClue from './ActiveClue'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(showing)
  const [isAnswered, setIsAnswered] = useState(false)
  
  
  const expandClue = (evt) => {
    // console.log('evt', evt)
    (isShowing === null) ? setIsShowing( true) : setIsShowing( false )
    const id = evt.target.id
    // extract index from clue
    const categoryIdx = +id[0]
    const clueIdx = +id[id.length - 1]
    console.log(categoryIdx, clueIdx)
  }

  
  const content = (isShowing === null) ? value : (isShowing === true) ? question : answer

  return (
    <div 
      onClick={ expandClue }
      disabled={ isAnswered ? true : false}
      className={`Board-clue ${isAnswered ? 'answered' : ''}`} 
      id={id}
      >
      { value }
      { isShowing && 
        <ActiveClue 
          content={content} 
          answer={answer} 
          setIsAnswered={setIsAnswered} /> 
          }
      </div>
  )
}

export default Clue
