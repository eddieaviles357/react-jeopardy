import React, {useState} from 'react'
import './board.css'

const Clue = ({ id, question, answer, value, showing }) => {
  const [isShowing, setIsShowing] = useState(showing)
  
  
  const clickHandler = (evt) => {
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
      onClick={ clickHandler }
      className='Board-clue' 
      id={id}
      >{ content }</div>
  )
}

export default Clue
