import React from 'react'
import Twitter from '../assets/Twitter Icon.png'
import Facebook from '../assets/Facebook Icon.png'
import Instagram from '../assets/Instagram Icon.png'
import Linkedin from '../assets/Linkedin Icon.png'
import Github from '../assets/GitHub Icon.png'

const footer = () => {
  return (
    <div className='footer-section'>
      <a href='https://twitter.com/adeboluuu'><img  className="icons"src={Twitter} alt="Twitter"href=""/></a>
      <a href='https://www.instagram.com/_adeboluuu/'><img className="icons"src={Instagram} alt="Instagram"/></a>
      <a href='https://www.linkedin.com/in/adeboluwarinthomas/'> <img className="icons"src={Linkedin} alt="Linkedin"/></a>
      <a href='https://github.com/adeboluuu'><img className="icons"src={Github} alt="Github"/></a>

    </div>
  )
}

export default footer