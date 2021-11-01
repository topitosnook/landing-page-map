import React from 'react';
import ItemTag from './ItemTag';

export default function ProjectIntro({ data, image }) {
  console.log(data);
  return (
    <section className="intro-section">
      <div>
        <p className="intro__location">{data.location}</p>
        <h1 className="intro__name">{data.name}</h1>
        <div className='tag'>
          {data.services.map((service,index) => {
            return <ItemTag key={index} name={service} />;
          })}
        </div>
        <p className="intro__description" >{data.description}</p>

      </div>
      <img className='intro__image' src={image} alt='' />
    </section>
  );
}
