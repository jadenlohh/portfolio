import React from 'react';
import Portrait from '../image/portrait.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className='container hero'>
      <div className='row'>
        <div className='col-md-6 col-sm-12 hero-textbox'>
          <div className='d-flex flex-column justify-content-center h-100'>
            <div>
              <h1>Jaden Loh</h1>
              <p>Graduate from Nanyang Polytechnic</p>

              <a href='https://drive.google.com/file/d/1VMDphUSAsL5PLoMkd9viNqy_ZimAXFyb/view?usp=sharing' target='_blank' rel='noreferrer noopener' className='btn shadow-none mt-5 py-3 text-start w-100 d-flex justify-content-between download-resume-btn' role='button'>
                <span>Download Resume</span>
                <span className='arrow-right'><i className='fa-solid fa-arrow-right'></i></span>
              </a>
            </div>
          </div>
        </div>

        <div className='col-md-6 col-sm-12 text-end portrait-container'>
          <img className='img-fluid portrait' src={Portrait} />
        </div>
      </div>
    </div>
  )
}

export default Hero