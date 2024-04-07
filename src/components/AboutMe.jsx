import React from 'react';
import '../styles/aboutMe.css';

const AboutMe = () => {
  return (
    <div className='container'id='about-me'>
      <div>
        <h3 className='section-title'><span style={{color: '#555'}}>#</span>&nbsp;about-me</h3>
        
        <div className='section-body'>
          <p>
            The first programming language that i learned was Python when i was 16. Through YouTube videos and online research, i managed to build 
            my first program and it inspired me to pursue a Diploma in Information Technology.
          </p>
          <p>
            Working on different government projects during my internship at NCS Group and brainstorming ideas for my school projects got me thinking - 
            what if i used technology to create applications that solves real-world problems?
          </p>
          <p>
            That is what i want to do now and in the future. To use my knowledge and experience in tech to make an impact on the community.
          </p>
          <p>
            When I'm not at the computer, i'll usually be hanging out with my friends and family or running.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe