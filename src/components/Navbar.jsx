import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar justify-content-center'>
      <a href='/' className='navbar-links'>Home</a>
      <a href='#about-me' className='navbar-links'>About me</a>
      <a href='#experience' className='navbar-links'>Experience</a>
      <a href='#projects' className='navbar-links'>Projects</a>
    </nav>
  )
}

export default Navbar