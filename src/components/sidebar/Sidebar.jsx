import React from 'react'
import './sidebar.scss'
import resume from '../../assets/karen_cai_resume.pdf'

const Sidebar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"menu " + (menuOpen && 'active' )}>
        <ul className="menuList">
            <li className='menuItem' onClick={()=>setMenuOpen(false)}><a href="#aboutMe">About</a></li>
            <li className='menuItem' onClick={()=>setMenuOpen(false)}><a href="#experience">Experience</a></li>
            <li className='menuItem' onClick={()=>setMenuOpen(false)}><a href="#work">Projects</a></li>
            <li className='menuItem' onClick={()=>setMenuOpen(false)}><a href="#contact">Contact</a></li>
            <li className='menuItem' onClick={()=>setMenuOpen(false)}><a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a></li>
        </ul>
    </div>
  )
}

export default Sidebar