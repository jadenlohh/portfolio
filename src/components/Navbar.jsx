import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar justify-content-center pt-5'>
      <a className='mx-2 px-2' href='/'>Home</a>
      <a className='mx-2 px-2' href='#about-me'>About me</a>
      <a className='mx-2 px-2' href='#projects'>Projects</a>
      <a className='mx-2 px-2' href='https://google.com' target='_blank' rel='noopener noreferrer '>Resume <span><i className='fa-solid fa-arrow-up-right-from-square ms-1'></i></span></a>
    </nav>
  )
}

export default Navbar