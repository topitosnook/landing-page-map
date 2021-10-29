import React, { useState } from 'react';
import ItemProject from './ItemProject';


export default function SectionProject({ dataProjects }) {
  // const images = [
  //   'C:/Users/valer/Documents/Laboratoria/Proyectos/github-topitosnook/landing-page-map/src/assets/img/img_project_1.png',
  //   'C:/Users/valer/Documents/Laboratoria/Proyectos/github-topitosnook/landing-page-map/src/assets/img/img_project_2.png',
  //   'C:/Users/valer/Documents/Laboratoria/Proyectos/github-topitosnook/landing-page-map/src/assets/img/img_project_3.png',
  //   'C:/Users/valer/Documents/Laboratoria/Proyectos/github-topitosnook/landing-page-map/src/assets/img/img_project_4.png',
  // ];
  return (
    <section className='projectSection'>
      <h1>Todos Nuestros proyectos</h1>
      <div className='projectCards'>
        {dataProjects.data.map((project, index) => (
          <div key={project.id}>
            <ItemProject project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
}
