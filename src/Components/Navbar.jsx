import React from 'react';
import { FaMastodon } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { BiSun } from 'react-icons/bi';

const Navbar = () => {
  return (
    // <div className='flex justify-between p-10 px-20 mb-20'>
    <div className='flex justify-between p-10 px-5 md:mb-20 md:p-10 md:px-20 '>
        <div>
            <span style ={{fontSize: '40px'}}>
              <FaMastodon/>
            </span>            
        </div>
        <div className=' flex justify-between space-x-10 pt-2'>
          <a href='https://www.linkedin.com/in/maysha-maliha-mou/' target='_blank' style={{fontSize: '20px'}} ><BsLinkedin/></a>
          <a href='https://github.com/mayshamaliha' target='_blank' style={{fontSize: '20px'}}><BsGithub/></a>
          {/* <a href='https://maysha.maliha.mou@g.bracu.ac.bd' style={{fontSize: '20px'}} target='_blank'><AiFillMail/></a>
          <div className=' hello border-solid border-x-slate-50 border-1 rounded-full pl-10 pr-10 text-center pb-2'>Say Hello!</div>
          <div style={{fontSize: '20px'}}><BiSun/></div> */}
        </div>
    </div>
  )
}

export default Navbar;