import React, { useContext } from 'react'
import JeopardyContext from '../../JeopardyContext'
import CategoryHeader from './CategoryHeader'
import Clue from './Clue'
import { NUM_CATEGORIES } from '../../constants'

const Board = () => {
  const {
    jpardyData
  } = useContext( JeopardyContext )

  console.log('Board.Component', jpardyData)

  return (
    <>
      {jpardyData.map( ({ title, clues }, idx1 ) => ( 
        <div class='Board-column' key={ new Date().getTime() + idx1 }>
          <CategoryHeader>{ title }</CategoryHeader> 
            {clues.map( ({ question, answer, showing }, idx2 ) => ( 
              <Clue key={ new Date().getTime() + idx1 + idx2} id={ `${idx1} - ${idx2}` } >
              { question }
              </Clue> 
            ))}
        </div>
      ))}
    </>
  )
}

export default Board
