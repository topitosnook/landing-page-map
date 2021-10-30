import React from 'react';
import ItemTag from './ItemTag';

export default function FirstSectionProject({ data, image }) {
  console.log(data);
  return (
    <section>
      <div>
        <p>{data.location}</p>
        <h1>{data.name}</h1>
        <div className='serviceTags'>
          {data.services.map((service,index) => {
            return <ItemTag key={index} name={service} />;
          })}
        </div>
        region proyecto, nombre proyecto, tags del proyecto, parrafo del proyecto
      </div>
      <img className='imagefirstset' src={image} alt='' />
    </section>
  );
}
