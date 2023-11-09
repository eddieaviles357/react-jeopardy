import React, { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

const Loading = () => {
  const ref = useRef()

  useAnimationFrame((time, delta) => {
    if(!ref.current) return;
    ref.current.style.transform = `rotate(${time/10}deg`
  })

  return (
    <div 
      ref={ref}
      className='Loading'>
    </div>
  )
}

export default Loading
