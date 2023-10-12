import React from 'react'
import logo from '../../Jeopardy-logo.svg'
import './home.css'

const Title = () => {
  return (
    <h1>
      <img src={logo} className="main-title" alt="Jeopardy" />
    </h1>
  )
}

export default Title
