import React from 'react';
import mapaObras from '../../assets/img/map.png';

export default function SectionWorkMap() {
  return (
    <section className='map'>
      <h2 className='map__title'>Mapa de obras</h2>
      <div className='map__image'>
        <img src={mapaObras} alt='mapa de obras' />
      </div>
    </section>
  );
}
