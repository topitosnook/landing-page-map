import React from 'react';
import BoxImpact from '../BoxImpact';

export default function SectionImpact({data}) {
  return (
    <section className='impact-section'>
      <h1 className='impact__title'>Impacto</h1>
      <div className='impact__cards'>
        {data.impact.map((impact, index) => {
          return <BoxImpact key={index} impact={impact} />;
        })}
      </div>
    </section>
  );
}
