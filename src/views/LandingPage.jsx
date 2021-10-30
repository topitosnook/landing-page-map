import React from 'react';
import MetaDecorator from '../components/MetaDecorator';
import NavBar from '../components/NavBar';
import SectionMap from '../components/SectionMap';
import SectionProject from '../components/SectionProject';
import Footer from '../components/Footer';

export default function LandingPage({ dataProjects }) {
  return (
    <>
      <MetaDecorator title='Toroto - Vuélvete carbono neutral' />
      <NavBar />
      <main className='content-wrap'>
        <SectionMap />
        <SectionProject dataProjects={dataProjects} />
      </main>
      <Footer />
    </>
  );
}
