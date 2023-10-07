import React from 'react'
import logo from '../../Jeopardy-logo.svg';

const titleStyle = {
  display: 'block',
  width: '500px',
  margin: '0 auto',
  padding: '10px'
}

const Title = () => {
  return (
    <h1>
      <img src={logo} style={titleStyle} className="main-title" alt="Jeopardy" />
    </h1>
  )
}

export default Title
