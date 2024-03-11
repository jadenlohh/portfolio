import React from 'react';
import '../../styles/experience.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div className='container py-5 my-5' id='experience'>
      <h3 className='mb-4'><span style={{color: '#555'}}>#</span>experience</h3>
      <ExperienceItem />
    </div>
  )
}

export default Experience