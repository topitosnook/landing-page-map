import React from 'react';
import instagram from '../assets/icons/svg/instagram_icon.svg';
import facebook from '../assets/icons/svg/facebook_icon.svg';
import linkedin from '../assets/icons/svg/linkedin_icon.svg';
import twitter from '../assets/icons/svg/twitter_icon.svg';
import logo from '../assets/icons/svg/logo.svg';

export default function Footer() {
  return (
    <footer className='mainFooter'>
      <section className='redesSociales'>
        <img src={facebook} alt='Facebook redirect' />
        <img src={linkedin} alt='Linkedin redirect' />
        <img src={instagram} alt='Instagram redirect' />
        <img src={twitter} alt='Twitter redirect' />
      </section>
      <section className='logoFooter'>
        <img src={logo} alt="Toroto" />
      </section>
    </footer>
  );
}
