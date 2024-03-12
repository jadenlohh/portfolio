import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <div className="container footer">
      <div className="d-flex flex-column align-items-center h-100 mb-4">
        <div className="text-center">
          <p>Built with React and deployed on Vercel</p>
          
          <a href='https://github.com/jadenlohh' target='_blank' className='text-decoration-none' rel='noreferrer noopener'>
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>
          <a href='https://www.linkedin.com/in/jadenlohweiheng/' target='_blank' className='text-decoration-none' rel='noreferrer noopener'>
            <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href='mailto:jadenlohh@gmail.com' target='_blank' className='text-decoration-none' rel='noreferrer noopener'>
            <i className="fa-solid fa-inbox" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer