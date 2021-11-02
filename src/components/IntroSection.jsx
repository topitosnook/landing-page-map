import React from 'react';
import ButtonProject from './ButtonProject';

export default function IntroSection() {
  return (
    <>
      <section className='add-project'>
        <h1 className='add-project__title'>Somos desarolladores de proyectos</h1>
        <p className='add-project__description'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque inventore aliquid mollitia, alias aperiam dolorum sunt! Eligendi optio
          nemo, dolorem ducimus sunt officia eaque sint suscipit porro animi, dicta labore.
        </p>
        <ButtonProject name="PROPONER UN PROYECTO" classType={'dark'}/>
      </section>
    </>
  );
}
