import React, { useRef } from 'react'
import logo from '../../Jeopardy-logo.svg'
// import logo from '../../jeopardy.svg'
import { motion, useAnimationFrame } from 'framer-motion'
import './home.css'

const Title = () => {
  const ref = useRef(null)

  useAnimationFrame((time, delta) => {
    if(time > 1000) return

    let size = time/1000

    if(size > 1) size = 1
    
    ref.current.style.opacity = `${size}`
    ref.current.style.transform = `scale(${size})`
    ref.current.style.filter = `drop-shadow(13px 15px 6px rgb(0 0 0 / 0.4))`
  })

  return (
    <motion.svg 
      ref={ref}
      version="1.0" id="title" inkscapeversion="0.91 r13725" sodipodidocname="Jeopardy!.svg" xmlnscc="http://creativecommons.org/ns#" xmlnsdc="http://purl.org/dc/elements/1.1/" xmlnsinkscape="http://www.inkscape.org/namespaces/inkscape" xmlnsrdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlnssodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlnssvg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 282.6" enableBackground="new 0 0 1000 282.6" xmlSpace="preserve">
        <path className='title-svg' id="rect4359" inkscapeconnector-curvature="0" d="M68.5,0v242.6c0,4.1-3.4,7.4-7.6,7.4h-17c-4.2,0-7.6-3.3-7.6-7.4v-75H0
          v94.6c0,11.3,9.1,20.4,20.5,20.4h65c11.3,0,20.5-9.1,20.5-20.4V0C106,0,68.5,0,68.5,0z M160.2,0c-20.7,0-37.3,9.7-37.3,21.7V259
          c0,12,9.4,23.6,30.1,23.6h70.3V250H170c-5.4,0-9.7-4.3-9.7-9.7v-30.2c0-5.4,4.3-9.7,9.7-9.7h53.3v-32.2h-52.6
          c-5.7,0-10.3-4.6-10.3-10.3v-32.1c0-5.7,4.6-10.3,10.3-10.3h52.6V0L160.2,0L160.2,0z M262.1,0c-10.9,0-19.6,9.1-19.6,20.4v241.7
          c0,11.3,8.8,20.4,19.6,20.4h62.3c10.9,0,19.6-9.1,19.6-20.4V20.4C344,9.1,335.3,0,324.4,0L262.1,0L262.1,0z M362.8,0v282.6h36.3
          v-81.4h40.1c13.9,0,25.2-8.7,25.2-19.5v-46.7v-1.6V25.5c0-14.1-14.7-25.5-32.9-25.5L362.8,0L362.8,0z M516,0
          c-12,0-22.4,8.2-23.3,18.4l-23.3,264.1h36.3l7.6-82.4h32.7l7.6,82.4h39.9L566.2,18.4C565.1,8.2,554.6,0,542.6,0h-0.8h-25H516z
          M605.2,0v282.6l34.5,0v-82.8h19.8c8.7,0.7,16,7.4,16.6,15.8l5.1,67h38.2l-8-69.9c-1.7-14.7-6.5-21-13.5-28
          c6.6-6.6,10.6-9.1,10.6-16.8v-5.1V25.5c0-14.1-13.7-25.5-30.7-25.5L605.2,0L605.2,0z M732.7,0v282.6h70.4
          c16.5,0,29.8-11.4,29.8-25.5V25.5c0-14.1-13.3-25.5-29.8-25.5H732.7L732.7,0z M846,0v167.8c0,16.7,13.2,30.2,29.5,30.2h38.9v45.7
          c0,2.8-2.9,5-6.5,5c-2.3,0-4.7,0-7.1,0c-8.4,0-16.8,0-24,0v33.9h37.6h5.1c16.1,0,29.1-9.4,29.1-21.1V0h-34.3v119c0,0,0,0,0,0.1v47.1
          h-26c-3.7,0-6.7-3.5-6.7-7.9V0L846,0L846,0z M966.5,0v197.9h33.5V0C1000,0,966.5,0,966.5,0z M639.7,114.1h22.6
          c5.3,0,9.6,5.1,9.6,11.4v29.9c0,6.3-4.3,11.4-9.6,11.4h-22.6C639.7,166.8,639.7,114.1,639.7,114.1z M765.3,114.1h24.6
          c5.8,0,10.4,5.4,10.4,12.1v110.3c0,6.7-4.6,12.1-10.4,12.1h-24.6V114.1L765.3,114.1z M528.1,115h3c3.9,0,7.2,2.1,7.4,4.7l4.4,47.7
          h-26.6l4.4-47.7C521,117.1,524.3,115,528.1,115L528.1,115z M290.9,115.4h4.7c6,0,10.9,4.3,10.9,9.7v115.1c0,5.4-4.9,9.7-10.9,9.7
          h-4.7c-6,0-10.9-4.3-10.9-9.7V125.1C280,119.7,284.9,115.4,290.9,115.4z M399.1,116h21.5c4.2,0,7.6,4.4,7.6,9.8v32.7
          c0,5.4-3.4,9.8-7.6,9.8h-21.5C399.1,168.2,399.1,116,399.1,116z M966.5,209.7v31.8h33.5v-31.8H966.5z"/>
    </motion.svg>
  )
}

export default Title
