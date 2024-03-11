import React from 'react';
import Portrait from '../image/portrait.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-6'>
          <div className='d-flex flex-column justify-content-center align-items-center h-100'>
            <div>
              <h1>Jaden Loh</h1>
              <p>Year 3 student at Nanyang Polytechnic</p>

              <button className='btn shadow-none mt-5 py-3 text-start w-100 d-flex justify-content-between'>
                <span>Download Resume</span>
                <span className='arrow-right'><i className='fa-solid fa-arrow-right'></i></span>
              </button>
            </div>
          </div>
        </div>

        <div className='col-6 text-center'>
          <img className='img-fluid portrait' src={Portrait} />
        </div>
      </div>

      <span className='arrow-down-container'>
        <i className='fa-solid fa-arrow-down'></i>
      </span>
    </div>
  )
}

export default Hero