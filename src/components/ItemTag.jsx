import React from 'react';
import serviceIcon from '../assets/icons/svg/service_icon.svg';
import closeIcon from '../assets/icons/svg/close_icon.svg';


export default function ItemTag({name}) {
  return (
    <div className="tagItem">
      <img src={serviceIcon} alt="service medal" />
      {name}
      <img src={closeIcon} alt="close" />
    </div>
  );
}
