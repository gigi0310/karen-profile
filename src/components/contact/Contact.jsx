import React from 'react'
import './contact.scss'

const Contact = () => {
  return (
    <div className='contact' id="contact">
      <div className='contactLeft'></div>
      <div className="contactCenter">
        <h1>Get In Touch</h1>
        <a class="email-link" href="mailto:karencai.dev@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
      </div>
      <div className="contactRight"></div>
    </div>
  )
}

export default Contact