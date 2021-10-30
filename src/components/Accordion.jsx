import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

export default function Accordion({ title, content }) {
  const [activeState, setActiveState] = useState('');
  const [heightState, setHeightState] = useState('0px');
  const [rotateState,setRotateState] = useState('accordionIcon');

  const contents = useRef(null);
  
  const toggleAccordeon = () => {
    setActiveState(activeState === '' ? 'active' : '');
    setHeightState(activeState ==='active'?'0px':`${contents.current.scrollHeight}px`);
    setRotateState(activeState === 'active'?'accordionIcon':'accordionIcon rotate');
  };
  return (
    <section className='accordionSection'>
      <button className={`accordion ${activeState}`} onClick={toggleAccordeon}>
        <p className='accordionTitle'>{title}</p>
        <Chevron className={`${rotateState}`} width={15}/>
      </button>
      <div ref={contents} style={{maxHeight:`${heightState}`}} className='accordionContent'>
        {/* <div className='accordionText' dangerouslySetInnerHTML={{ __html: content }} /> */}
        <div className='accordionText'>{content}</div>
      </div>
    </section>
  );
}
