import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar justify-content-center py-5'>
      <a className='mx-2 px-2' href='/'>Home</a>
      <a className='mx-2 px-2' href='#about-me'>About me</a>
      <a className='mx-2 px-2' href='#projects'>Projects</a>
    </nav>
  )
}

export default Navbar