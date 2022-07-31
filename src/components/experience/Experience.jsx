import React from 'react'
import './experience.scss'
import {ReactComponent as WorkIcon} from '../../assets/work.svg'
import {ReactComponent as SchoolIcon} from '../../assets/school.svg'
import timelineElements from '../../assets/timelineElement'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component/dist-modules'
import 'react-vertical-timeline-component/style.min.css'


const Experience = () => {
  let workIconStyles = {background:"#e3b7f6"}
  let schoolIconStyles = {background:"#e3b7f6"}
  

  return (
    <div className='exp' id="experience">
      <div className="expLeft"></div>
      <div className="expCenter">
        <div className='centerContainer'>
          <h2>Experience</h2>
          <VerticalTimeline>
          {
            timelineElements.map(element => {
              let isWorkIcon =element.icon === "work"
             

              return (
                <VerticalTimelineElement
                  key={element.key}
                  iconStyle={isWorkIcon? workIconStyles : schoolIconStyles}
                  icon = {isWorkIcon? <WorkIcon /> : <SchoolIcon />}
                >
                  <h3 className='vertical-timeline-element-title'>{element.title}</h3>
                  <h4 className='vertical-timeline-element-subtitle'>{element.location} 
                  </h4>
                  <h4 className='vertical-timeline-element-subtitle'>{element.location1} 
                  </h4>
                  
                  <p id="description">{element.description}</p>
                  {/* {showButton && (
                    <a 
                      className={`button ${
                        isWorkIcon ? "workButton" :"schoolButton"
                        }`} 
                        href="/"
                        >
                          {element.buttonText}
                    </a>
                  )} */}
                </VerticalTimelineElement>
              )
            })
          }
          </VerticalTimeline>
        </div>
        
      </div>
      <div className="expRight"></div>
      
    </div>
  )
}

export default Experience