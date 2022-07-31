import React from 'react'
import './landing.scss'
import SocialMedia from '../socialmedia/SocialMedia'
import Email from '../email/Email'

const Landing = () => {
  return (
    <div className='landing' id='home'>
        <div className='left'>
          <SocialMedia />
        </div>
        <div className='center'>
            <div className='center_content'>
                <p>Hi, my name is</p>
                <h1>Karen Cai</h1>
                <h2>I build things for the Web.</h2>
                <p>I'm a web developer specialising in building exceptional digital experiences. </p>
                {/* Currently, I'm focused on building responsive full-stack web application. */}
                {/* <a href="#work">Check out my projects</a> */}
            </div>
           
           
        </div>
        <div className='right'>
          <Email />
        </div>
        
    </div>
  )
}

export default Landing;