import React from 'react'
import './about.scss'
import aboutImage from '../../assets/girl.jpeg'

const About = () => {
  return (
    <div className='about' id="aboutMe">
      <div className='aboutLeft'></div>
      <div className="aboutCenter">
        <div className='aboutContainer'>
          <div className='aboutContent'>
            <h2>About Me</h2>

              <p>I was a passionate and commercially focused professional in accounting but a love of problems solving has brought to light for me that Software Engineering is the career path of my future. In the past roles, I focused on automating accounting processes.</p>

              <p>As I developed programming skills, my love for coding got stronger. So I made the change to study Software Engineering to fill the gap between tech and number. </p>

              <p>I’ve loved to leverage my skill and experience to design, develop and create types of technology to turn an idea into a final product.</p> 

              <p>Here are a few technologies I’ve been working with recently:</p>
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>SQL</li>
              </ul>
          </div>
            
            
        </div>
        <div className='aboutImage'>
          <img src={aboutImage} alt="aboutImage" />
        </div>
      </div>
      <div className="aboutRight"></div>
    </div>
  )
}

export default About