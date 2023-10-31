import React, {useState} from 'react'
import './board.css'
import ActiveClue from './ActiveClue'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(showing)
  
  
  const expandClue = (evt) => {
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
      className='Board-clue' 
      id={id}
      >
      { content }
      { isShowing && <ActiveClue content={content} answer={answer} setIsShowing={setIsShowing}/> }
      </div>
  )
}

export default Clue
