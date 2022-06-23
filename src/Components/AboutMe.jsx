import React from 'react';

import SubHeading from './SubHeading';
import aboutMeImg from '../assets/aboutMe2.png';

const AboutMe = () => {
  return (
    <div className='p-10 m-10'>
      <SubHeading title="About Me"/>
      <div className=' flex'>
        <div className='aboutIcon w-1/2'>
          <img className='aboutMeImg' src={aboutMeImg}/>
        </div>
        <div className='aboutText w-1/2 p-20'>
          <div>Get to know Me</div>
          <div>
            Curabitur ligula nibh, posuere sed congue eget, porttitor in enim. Etiam pulvinar, lorem ut condimentum fermentum, risus massa finibus ante, a tempus ipsum ante a neque. Integer eget tempus elit. 
            Sed molestie lacus nec nisi varius accumsan. Nunc orci justo, maximus non viverra sit amet, lacinia ac tortor. Suspendisse libero ante, hendrerit vel erat sit amet, ornare malesuada est. 
            Integer tincidunt turpis et nibh gravida vulputate. Proin quam mauris, venenatis eget ligula ac, ullamcorper hendrerit diam. 
            Sed nec turpis ultrices odio sagittis ultrices. Fusce tincidunt in sem sit amet cursus.
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default AboutMe