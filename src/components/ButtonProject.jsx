import React from 'react';

export default function ButtonProject({ name, classType }) {
  return <button className={`add-project__button ${classType}`}>{name}</button>;
}
