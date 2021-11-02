import React from 'react';

export default function ModalInfo({ closeModal }) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <button onClick={()=>closeModal(false)}>X</button>
        <div>
          <img src='' alt='' />
        </div>
        <h1 className='modal__title'>title</h1>
        <div className='modal__description'></div>
        <div className='modal__list'>
          <h2 className='list__title'></h2>
          <ul className='list__desctiptor'>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
