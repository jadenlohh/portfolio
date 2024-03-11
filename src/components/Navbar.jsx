import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar justify-content-center pt-5'>
      <a href='/'>Home</a>
      <a href='#about-me'>About me</a>
      <a href='#experience'>Experience</a>
      <a href='#projects'>Projects</a>
    </nav>
  )
}

export default Navbar