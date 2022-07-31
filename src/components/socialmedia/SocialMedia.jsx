import React from 'react'
import './socialMedia.scss'
import {BsGithub,BsLinkedin} from 'react-icons/bs'

const socialMedia = () => {
  return (
    <div className='social_media'>
        <ul className='social_media_items'>
            <li>
                <a href="https://github.com/gigi0310" target={'is_blank'}>
                    <BsGithub className='icon'/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/karen-cai-melbourne/" target={'is_blank'}>
                    <BsLinkedin className='icon'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default socialMedia