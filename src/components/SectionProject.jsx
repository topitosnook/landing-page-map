import React from 'react';
import ItemProject from './ItemProject';

export default function SectionProject() {
  return (
    <section className='projectSection'>
      <h1>Todos Nuestros proyectos</h1>
      <div className='projectCards'>
        <ItemProject />
        <ItemProject />
        <ItemProject />
        <ItemProject />
      </div>
    </section>
  );
}
