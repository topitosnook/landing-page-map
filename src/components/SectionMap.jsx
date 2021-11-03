import React from 'react';
import { Link } from 'react-router-dom';
import chevron from '../assets/icons/svg/chevron-down.svg';
import IntroSection from './IntroSection';
import Mapbox from './Mapbox';

export default function SectionMap({ dataProjects, images }) {
  return (
    <section className='containerMap'>
      <Mapbox dataProjects={dataProjects} images={images} />
      <section className='mapOverlay'>
        <section className='intro'>
          <IntroSection />
        </section>
        <section className='moreProjects'>
          <p>Ver lista completa de proyectos</p>
          <a href='/landing-page-map/#sectionForProjects'>
            <img src={chevron} alt='Ver lista de proyectos' />
          </a>
        </section>
      </section>
    </section>
  );
}
