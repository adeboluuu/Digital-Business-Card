import React from 'react'
import Mail from '../assets/Mail.svg'

function Mailto({ email, subject, body, ...props }) {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
    {props.children}
  </a>
  );
}
<div email="adeboluwarinthomas@gmail.com" subject="Contact" body="Hi Adeboluwarin,I would like to">
<button>
          <img src={Mail} className='mail-img'alt='Mail'/> Email
        </button>
</div>

export default Mailto