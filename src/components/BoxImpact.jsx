import React from 'react';

export default function BoxImpact({ impact }) {
  return (
    <div className='impact__card'>
      <div className='impact__card__background'>
        <div className='impact__card__info'>
          <p className='impact__card__name'> {impact.value}</p>
          <p className='impact__card__value'>{impact.name}</p>
        </div>
      </div>
    </div>
  );
}
