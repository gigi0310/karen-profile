import React, {useState, useEffect} from 'react';
import { ArrowBackIosOutlined, ArrowForwardIosOutlined} from '@material-ui/icons';
// import ProjectItems from '../projectItems/ProjectItems';
import './projects.scss';
import projectsData from '../../assets/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
    const [projects, setProjects] = useState(projectsData)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = projects.length - 1;
        if (index < 0) {
          setIndex(lastIndex);
        }
        if (index > lastIndex) {
          setIndex(0);
        }
      }, [index, projects]);
    
      useEffect(() => {
        let slider = setInterval(() => {
          setIndex(index + 1);
        }, 5000);
        return () => {
          clearInterval(slider);
        };
      }, [index]);    
  return (
    <div className="projects" id="work">
        <div className="projectsLeft"></div>
        <div className="projectsCenter">
            <section className="projectSection">
                <div className="title">
                    <h2>Something I'v Built</h2>
                </div>
                <div className="section-center">
            
                    {projects.map((projectData,projectDataIndex)=>{
                        const {id, img, name, desc,tech,website, github} = projectData;

                    let position = 'nextSlide';
                    if (projectDataIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        projectDataIndex === index - 1 ||
                        (index === 0 && projectDataIndex === projects.length - 1)
                    ) {
                        position = 'lastSlide';
                    }
                        return (
                            <article className={position} key={id}>
                                <img className="projectImg" src={img} alt="" />
                                <h4>{name}</h4>
                                <p className='desc'>{desc}</p>
                                <p className='tech'>{tech}</p>
                                <a href={github} target={'is_blank'}  ><FontAwesomeIcon className="icon1" icon={faGithub} >   </FontAwesomeIcon></a>
                                
                                <a href={website} target={'is_blank'} ><FontAwesomeIcon className='icon2' icon={faArrowUpRightFromSquare} > </FontAwesomeIcon></a>
                                
                            </article>
                        );
                    })}
            
                    <ArrowBackIosOutlined className='prev' onClick={() => setIndex(index - 1)} />
                    <ArrowForwardIosOutlined className="next" onClick={() => setIndex(index + 1)} />
                
                </div>
            </section>
        </div>
        <div className="projectsRigh"></div>

    </div>
    
  )
}

export default Projects



