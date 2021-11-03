import React from 'react';
import { ModalGallery } from '../ModalInfo';

export default function SectionGallery({ data, openModal, setOpenModal }) {
  return (
    <section className='gallery-section'>
      <h2 className='gallery__title'>Galeria de imágenes</h2>
      <div className='gallery'>
        {data.images.map((image, index) => {
          return (
            <div key={index} className='gallery__image'>
              <img className='gallery__photo' src={image} alt='' onClick={() => setOpenModal(true)} />
              {openModal && <ModalGallery closeModal={setOpenModal} image={image} data={data} />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
