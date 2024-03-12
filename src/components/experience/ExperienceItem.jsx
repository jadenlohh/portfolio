import React from 'react';
import NCSLogo from '../../image/NCS-Logo.png';

const ExperienceItem = () => {
  return (
    <div className='experience-item'>
        <div className='row'>
          <div className='col-md-4 col-sm-12'>
            <img src={NCSLogo} />
            
            <p className='mt-4 experience-date'>April 2023 - Current</p>
          </div>

          <div className='col-md-8 col-sm-12'>
            <h5>Cloud Security Associate · Internship</h5>

            <p className='experience-description'>
              Developed the UI of a Cybersecurity Mesh Architecture and its functionalities, including
              the authentication system, 2FA and access control. Besides that, i also help to mirror the
              production environment to the UAT environment by provisioning and deploying IaC scripts into 
              the UAT environment.
            </p>
          </div>
        </div>
      </div>
  )
}

export default ExperienceItem