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
      { 
        jpardyData.map( 
          ( { title, clues }, idx1 ) => ( 
            <CategoryHeader key={ new Date().getTime() + idx1 }>{ title }{
              clues.map( 
                ( { question, answer, showing }, idx2 ) => ( 
                  <div 
                    key={ new Date().getTime() + idx1 + idx2}
                    id={ `${idx1} - ${idx2}` } 
                    >{ question }
                  </div> 
                  ) )
            }</CategoryHeader> 
          ) 
        )
      }
    </>
  )
}

export default Board
