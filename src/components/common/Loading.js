import React, { useRef } from 'react'
import { useAnimationFrame } from 'framer-motion'

const Loading = () => {
  const ref = useRef()

  useAnimationFrame((time, delta) => {
    if (!ref.current) return;
    ref.current.style.transform = `rotate(${time / 10}deg`
  })

  return (
    <div
      ref={ref}
      alt='Loading'
      className='Loading'>
      {/*Used only for testing purpose*/}
      <div style={{ display: 'none' }}>Loading</div>
    </div>
  )
}

export default Loading
