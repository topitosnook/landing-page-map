import React from 'react';
import { PropTypes } from 'prop-types';
import NavBar from '../components/NavBar';
import SectionMap from '../components/SectionMap';
import SectionProject from '../components/SectionProject';
import Footer from '../components/Footer';

export default function LandingPage({ dataProjects }) {
  return (
    <>
      <NavBar />
      <main className='content-wrap'>
        <SectionMap />
        <SectionProject dataProjects={dataProjects} />
      </main>
      <Footer />
    </>
  );
}