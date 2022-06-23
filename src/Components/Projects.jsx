import React from 'react';
import SubHeading from './SubHeading';
import { projectDetails } from './data';


const Projects = () => {
  return (
    <div>
      <SubHeading title="My Projects"/>
      <div className='project'>
        {projectDetails.map((item, index) => (
          <div className='Card' key={index}>
            <img className='projectImg' src={item.image}/>
            <div className='projectHeader'>
              <p className='projectTitle'>{item.title}</p>
              <div className='HR rounded'/>
            </div>
            <div className='projectDescription'>{item.description}</div>
            <div className=' text-center p-3'>Stack</div>
            <div className=' flex justify-around pb-5 '>
              {item.tags.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
            <div className='projectVisit'>
              <a className='projectLink rounded-full' target="_blank" href={item.visit}>Visit</a>
            </div>
          </div>          
        ))}
      </div>      
    </div>
  )
}

export default Projects