import React from 'react';
import SubHeading from './SubHeading';
import { Skillsets } from './data';


const Skills = () => {
  return (
    <div>
      <SubHeading title="Technologies"/>
      <div className='skillSets space-x-0 sm:space-x-20 '>
        {Skillsets.map((item, index) => (
          <div className='skillGroup'>
            <p key={index} className=' font-serif text-2xl text-slate-300'>{item.title}</p>
            <div className=' skillItems'>
              {item.skills.map((skill, index) => (
                <p key={index} className='skill'>{skill}</p>
              ))}
            </div>            
         </div>
        ))}
      </div>
    </div>
  )
}

export default Skills