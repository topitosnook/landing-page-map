import React from 'react';
import MetaDecorator from '../components/MetaDecorator';
import NavBar from '../components/NavBar';
import SectionMap from '../components/SectionMap';
import SectionProject from '../components/SectionProject';
import Footer from '../components/Footer';

export default function LandingView({ dataProjects, images }) {
  return (
    <>
      <MetaDecorator title='Toroto - Vuélvete carbono neutral' />
      <NavBar />
      <header>{images !== undefined && <SectionMap dataProjects={dataProjects} images={images} />}</header>
      <main className='content-wrap'>
        <SectionProject dataProjects={dataProjects} images={images} />
      </main>
      <Footer />
    </>
  );
}
