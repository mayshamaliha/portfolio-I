import React from 'react';

const SubHeading = ({title}) => {
  return (
    <div className='subHeading'>
        <p className=' subHeadingTitle font-serif p-2'>{title}</p>
        <div className='sectionDivider rounded'/>
    </div>
  )
}

export default SubHeading