import React from 'react';

export default function BoxImpact({ impact }) {
  return (
    <div className="impactCard">
      <p className='nameImpact'> {impact.value}</p>
      <p className='valueImpact'>{impact.name}</p>
    </div>
  );
}
