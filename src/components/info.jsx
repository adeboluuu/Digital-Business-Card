import React from 'react'
import Image from '../assets/image.jpg'
import Mail from '../assets/Mail.svg'

const Body = () => {
  return (
    <div className="body">
      <img src={Image}alt="Image"className='image'/>
      <div className='info'>
        <p className='name'>Adeboluwarin Thomas</p>
        <p className='job'>Frontend Developer</p>
        <a className='site'href='www.adeboluwarinthomas.netlify.app'>Adeboluwarinthomas.website</a>
        <div className='btn'>
        <button>
          <img src={Mail} className='mail-img'alt='Mail'/> Email
        </button>
        </div>
      </div>
    </div>
  )
}

export default Body