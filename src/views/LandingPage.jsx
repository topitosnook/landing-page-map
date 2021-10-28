import React from 'react';
import NavBar from '../components/NavBar';
import SectionMap from '../components/SectionMap';
import SectionProject from '../components/SectionProject';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main className='content-wrap'>
        <SectionMap />
        <SectionProject />
      </main>
      <Footer />
    </>
  );
}
