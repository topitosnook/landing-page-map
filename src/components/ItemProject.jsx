import React from 'react';
import { Link } from 'react-router-dom';
import ButtonProject from './ButtonProject';
import ItemTag from './ItemTag';

export default function ItemProject({ project, image }) {
  return (
    <section className='project-card'>
      <div className='project-card__img'>
        <img src={image} alt='Lugar del proyecto' />
      </div>
      <div className='project-card__cover'>
        <div className='project-card__info'>
          <p className='project-card__location'>{project.location}</p>
          <h2 className='project-card__name'>{project.name}</h2>
          <p className='project-card__description'>{project.description}</p>
          <div className='tag'>
            <ItemTag name={'Servicio'} />
            <ItemTag name={'Servicio'} />
          </div>
        </div>
        <Link to={'/landing-page-map/' + project.id}>
          <ButtonProject name={'VER PROYECTO COMPLETO'} classType={'light'} />
        </Link>
      </div>
    </section>
  );
}
