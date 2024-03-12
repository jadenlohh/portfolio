import React from 'react';
import '../../styles/experience.css';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <div className='container'>
      <div className='d-flex align-items-center' id='experience'>
        <div>
          <h3 className='section-title mb-4'><span style={{color: '#555'}}>#</span>&nbsp;experience</h3>

          <div className='mt-5'>
            <ExperienceItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience