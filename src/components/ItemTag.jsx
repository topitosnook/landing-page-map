import React from 'react';
import serviceIcon from '../assets/icons/svg/service_icon.svg';

export default function ItemTag({ name }) {
  return (
    <div className='tag__item'>
      <img className='tag__image' src={serviceIcon} alt='service medal' />
      <p className='tag__name'>{name}</p>
    </div>
  );
}
