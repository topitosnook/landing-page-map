import React from 'react';
import Accordion from './Accordion';
import { ModalInfo } from '../ModalInfo';
import Tooltip from '../../assets/icons/svg/tooltip_icon.svg';

export default function SectionActivities({ openModal, setOpenModal, data }) {
  return (
    <>
      {data !== undefined && (
        <section className='activities'>
          <h1 className='activities__title'>
            Implementación{' '}
            <btn onClick={() => setOpenModal(true)} className='activities__modal'>
              <img src={Tooltip} alt='' />
            </btn>
            {openModal && <ModalInfo closeModal={setOpenModal} />}
          </h1>
          <div className='activities__accordeon'>
            <p className='activities__description'>Actividades de restauración</p>
            {data.activities.map((data, index) => {
              return <Accordion key={index} title={data.name} content={data.description} />;
            })}
          </div>
        </section>
      )}
    </>
  );
}
