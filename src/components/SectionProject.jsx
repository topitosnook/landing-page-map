import React, { useState } from 'react';
import ItemProject from './ItemProject';


export default function SectionProject({ dataProjects, images}) {
  return (
    <section className='projectSection'>
      <h1>Todos nuestros proyectos</h1>
      <div className='projectCards'>
        {dataProjects.data.map((project, index) => (
          <div key={project.id}>
            <ItemProject project={project} image={images[index]} />
          </div>
        ))}
      </div>
    </section>
  );
}
