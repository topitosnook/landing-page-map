import React from 'react';
import { Link } from 'react-router-dom';
import imgProject1 from '../assets/img/img_project_1.png';
import imgProject2 from '../assets/img/img_project_2.png';
import imgProject3 from '../assets/img/img_project_3.png';
import imgProject4 from '../assets/img/img_project_4.png';
import ButtonSeeProject from './ButtonSeeProject';
import ItemTag from './ItemTag';

export default function ItemProject({ project, index }) {
  let imageCover;
  switch (index) {
  case 0:
    imageCover = imgProject1;
    break;
  case 1:
    imageCover = imgProject2;
    break;
  case 2:
    imageCover = imgProject3;
    break;
  case 3:
    imageCover = imgProject4;
    break;
  }

  return (
    <section className='projectCard'>
      <div className='projectCover'>
        <img src={imageCover} alt='Lugar del proyecto' />
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
