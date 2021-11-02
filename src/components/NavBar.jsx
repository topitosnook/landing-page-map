import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/icons/svg/logo.svg';

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className='navbar'>
      <div>
        <Link to='/landing-page-map/'>
          <img className='logo' src={logo} alt='Toroto' />
        </Link>
      </div>
      <ul className={isMobile ? 'navLinksMobile' : 'navLinks'} onClick={() => setIsMobile(true)}>
        <Link to='/landing-page-map/' className='proyectos'>
          <li>PROYECTOS</li>
        </Link>
        <Link to='/landing-page-map/' className='sobreToroto'>
          <li>SOBRE TOROTO</li>
        </Link>
        <Link to='/landing-page-map/' className='blog'>
          <li>BLOG</li>
        </Link>
        <Link to='/landing-page-map/' className='metaRegistro'>
          <li>META REGISTRO</li>
        </Link>
        <Link to='/landing-page-map/' className='contacto'>
          <li>CONTACTO</li>
        </Link>
      </ul>
      <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
      </button>
    </nav>
  );
}
