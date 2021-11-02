import React from 'react';
import banner from '../assets/img/img_modal_actvidad.png';
import ButtonProject from './ButtonProject';
function ModalInfo({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='modal__banner'>
          <button className='modal__closebtn' onClick={() => closeModal(false)}>
            X
          </button>
          <div className='image-div'>
            <img className='modal__img' src={banner} alt='Gente trabajando en un espacio abierto' />
          </div>
          <img className='modal__img' src={banner} alt='Gente trabajando en un espacio abierto' />
        </div>
        <div className='modalInfo'>
          <h1 className='modal__title'>Restauración ecólogica</h1>
          <p className='modal__description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus molestiae eum natus dicta repellendus eaque magnam corrupti voluptatem
            eveniet, totam earum atque facilis quisquam ad cupiditate aut illum reiciendis accusantium?
          </p>
          <div className='modal__list-container'>
            <h2 className='list__title'>¿Cómo lo hacemos?</h2>
            <ul className='modal__list'>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
              <li>Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
          <div className='modal__buttons'>
            <ButtonProject name='PROPONER UN PROYECTO' classType={'dark'} />
            <ButtonProject name='VER LOS PROYECTOS' classType={'nude'} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ModalGallery({ closeModal, image }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainerGallery'>
        <div className="gallery-close-banner">
          <button className='gallery-close' onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div>
          <div className='modal__gallery'>
            <img className='modal__img-gallery' src={image} alt='Gente trabajando en un espacio abierto' />
            <p className='modal__img-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalInfo, ModalGallery };
