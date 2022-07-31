import React from 'react'
import './topbar.scss'
import logo from '../../assets/circle_kc.png'
import resume from '../../assets/karen_cai_resume.pdf'
const Topbar = ({menuOpen, setMenuOpen}) => {
 
  return (
      <>
        <div className={'topbar ' + (menuOpen && 'active')}>
                <div className='topLogo'>
                  <a href="#home">
                    <img src={logo} alt="logo" />
                  </a>
                    
                </div>
                
                <div className='topRight'>
                    <ul className='topMenu'>
                        <li className='topItem'>
                            <a href="#aboutMe">About</a>
                        </li>
                        <li className='topItem'><a href="#experience">Experience</a></li>
                        <li className='topItem'><a href="#work">Projects</a></li>
                        <li className='topItem l1' ><a href="#contact">Contact</a></li>
                        
                    </ul>
                
                    <div className='topButton'>
                      <a className='topItem resumeButton' href={resume} target='_blank' rel='noopener noreferrer'>Resume</a>
                    </div>
                    <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className="line3"></span>
                    </div>

                </div>
               

        </div>
    </>
  )
}

export default Topbar