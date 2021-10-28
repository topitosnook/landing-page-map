import React from 'react';
import chevron from '../assets/icons/svg/chevron-down.svg';
export default function SectionMap() {
  return (
    <section className='containerMap'>
      <section className='mapOverlay'>
        <section className='intro'>
          <h1>Somos desarolladores de proyectos</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore aliquid mollitia, alias aperiam dolorum sunt! Eligendi optio
            nemo, dolorem ducimus sunt officia eaque sint suscipit porro animi, dicta labore.
          </p>
          <button>Proponer un proyecto</button>
        </section>
        <section className='moreProjects'>
          <p>Ver Lista completa de proyectos</p>
          <img src={chevron} alt="Ver lista de proyectos" />
        </section>
      </section>
    </section>
  );
}
