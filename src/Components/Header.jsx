import React from 'react';
import  headerPhoto  from '../assets/headerPhoto.png';

const Header = () => {
  return (
    <div className='header'>
        <p className=' text-center font-serif text-3xl md:text-5xl m-5 md:m-0'>Front-end, Back-end & Full-Stack Developer</p>
        <p className=' text-center font-serif  text-xl text-slate-400 mt-5 md:text-xl m-10 md:m-5'>
          I am a web developer. I enjoy designing, coding and creating nice-looking websites.
        </p>
        <div className=' headerPhoto'>
          <img src={headerPhoto}/>
        </div>
    </div>
  )
}

export default Header;