import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSeeProject from './ButtonSeeProject';
import ItemTag from './ItemTag';

export default function ItemProject({ project, image }) {
  return (
    <section className='projectCard'>
      <div className='projectCover'>
        <img src={image} alt='Lugar del proyecto' />
      </div>
      <div className='projectInfoCover'>
        <div className='info'>
          <p>{project.location}</p>
          <h2>{project.name}</h2>
          <p>{project.description}</p>
          <div className='serviceTags'>
            <ItemTag name={'Servicio'} />
            <ItemTag name={'Servicio'} />
          </div>
        </div>
        <Link to={'/' + project.id}>
          <ButtonSeeProject name={'VER PROYECTO COMPLETO'} />
        </Link>
      </div>
    </section>
  );
}
