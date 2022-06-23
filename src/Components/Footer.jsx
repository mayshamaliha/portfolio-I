import React from 'react';
import { FaMastodon } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className=' footer mt-20'>
      <div>
        <div className='footerIcon'>
          <span style ={{fontSize: '50px'}}>
            <FaMastodon/>
          </span>
        </div>
        <div className=' m-10 mb-20'>
          <p className=' font-sans text-2xl mb-2 footerTxt'>Let's Get Connected!</p>
          <div className=' footerLinks space-x-5 pt-2'>
            <a href='https://www.linkedin.com/in/maysha-maliha-mou/' target='_blank' style={{fontSize: '20px'}} ><BsLinkedin/></a>
            <a href='https://github.com/mayshamaliha' target='_blank' style={{fontSize: '20px'}}><BsGithub/></a>
            {/* <div style={{fontSize: '20px'}}><BsFacebook/></div> */}
          </div>
        </div>        
      </div>
      <div className='m-10'>
        <p>&copy; 2022 | Maysha Maliha Mou</p>
      </div>
    </div>
   
  )
}

export default Footer