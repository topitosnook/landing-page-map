import React from 'react';
import ItemProject from './ItemProject';

export default function SectionProject({ dataProjects, images }) {
  return (
    <section className='project-section'>
      <h1 className='project-section__title'>Todos nuestros proyectos</h1>
      <div className='project-section__cards'>
        {dataProjects.data.map((project, index) => (
          <ItemProject key={project.id} project={project} image={images[index]} />
        ))}
      </div>
    </section>
  );
}
