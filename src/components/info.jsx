import React from 'react'
import Image from '../assets/image.png'
import Mail from '../assets/Mail.svg'

const Body = () => {
  return (
    <div className="body">
      <img src={Image}alt="Image"className='image'/>
      <div className='info'>
        <p className='name'>Adeboluwarin Thomas</p>
        <p className='job'>Frontend Developer</p>
        <a className='site'href='www.adeboluwarinthomas.netlify.app'>Portfolio</a>
        <div className='btn'>
        <a href="mailto:adeboluwarinthomas@gmail.com?subject=Contact mail&body=Hi Adeboluwarin,I would like to">
        <button>
          <img src={Mail} className='mail-img'alt='Mail'/> Email
        </button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Body