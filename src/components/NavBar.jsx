import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/svg/logo.svg';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className='navbar'>
      <div>
        <img src={logo} alt='Toroto' />
      </div>
      <ul className={isMobile ? 'navLinksMobile' : 'navLinks'} onClick={() => setIsMobile(true)}>
        <Link to='/' className='proyectos'>
          <li>PROYECTOS</li>
        </Link>
        <Link to='/' className='sobreToroto'>
          <li>SOBRE TOROTO</li>
        </Link>
        <Link to='/' className='blog'>
          <li>BLOG</li>
        </Link>
        <Link to='/' className='metaRegistro'>
          <li>META REGISTRO</li>
        </Link>
        <Link to='/' className='contacto'>
          <li>CONTACTO</li>
        </Link>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
    </nav>
  );
}
