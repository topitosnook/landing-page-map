import React from 'react';

export default function SectionProblem({ data }) {
  return (
    <section className='problem'>
      <h1 className='problem__title'>Problemática</h1>
      <p className='problem__description'>{data.problem}</p>
    </section>
  );
}
