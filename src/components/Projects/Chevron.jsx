import React from 'react';

export default function Chevron({ className, width, height }) {
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 45 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M33.75 16.875L22.5 28.125L11.25 16.875' stroke='#333333' />
    </svg>
  );
}
