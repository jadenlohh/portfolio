import React from 'react';
import '../../styles/experience.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div className='container' id='experience'>
      <div>
        <h3 className='section-title'><span style={{color: '#555'}}>#</span>&nbsp;experience</h3>

        <div className='section-body'>
          <ExperienceItem />
        </div>
      </div>
    </div>
  )
}

export default Experience