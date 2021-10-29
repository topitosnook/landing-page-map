import React from 'react';
import chevron from '../assets/icons/svg/chevron-down.svg';
import IntroSection from './IntroSection';
export default function SectionMap() {
  return (
    <section className='containerMap'>
      <section className='mapOverlay'>
        <section className='intro'>
          <IntroSection />
        </section>
        <section className='moreProjects'>
          <p>Ver Lista completa de proyectos</p>
          <img src={chevron} alt="Ver lista de proyectos" />
        </section>
      </section>
    </section>
  );
}
