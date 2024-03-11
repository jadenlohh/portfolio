import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <div className='container py-5 my-5' id='about-me'>
      <h3 className='section-title mb-4'><span style={{color: '#555'}}>#</span>about-me</h3>
      
      <div className='py-5'>
        <p>
          The first programming language that i learned through YouTube was Python when i was 16. Creating new programs has inspired me to 
          pursure a Diploma in Information Technology where i got to build foundational knowledge in programming and developing solutions to
          solve problems.
        </p>
        <p>
          I inspire to use technology to solve real-world problems, building applications that makes an impact to the community.
        </p>
        <p>
          When I'm not at the computer, i'll usually be hanging out with friends and family, watching videos and running.
        </p>
      </div>
    </div>
  )
}

export default AboutMe