import React, { useState, useEffect } from 'react';
import MetaDecorator from '../components/MetaDecorator';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import NavBar from '../components/NavBar';
import ProjectIntro from '../components/ProjectIntro';
import BoxImpact from '../components/BoxImpact';
import Accordion from '../components/Accordion';
import Tooltip from '../assets/icons/svg/tooltip_icon.svg';
import { ModalInfo, ModalGallery } from '../components/ModalInfo';
import mapaObras from '../assets/img/map.png';

export default function ProjectView({ dataProjects, images }) {
  let projectPath = window.location.pathname.substring(1);
  projectPath = projectPath.substr(projectPath.length - 4);
  const [data, setData] = useState();
  const [index, setIndex] = useState();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    dataProjects.data.forEach((project, i) => {
      if (project.id == projectPath) {
        setIndex(i);
        setData(project);
      }
    });
  }, []);
  console.log(data);
  return (
    <>
      {data !== undefined && <MetaDecorator title={`Toroto - ${data.location}`} />}
      <NavBar />
      <main className='content-wrap'>
        {data !== undefined && (
          <>
            {index !== undefined && <ProjectIntro data={data} image={images[index]} />}
            <section className='problem'>
              <h1 className='problem__title'>Problemática</h1>
              <p className='problem__description'>{data.problem}</p>
            </section>
            <section className='activities'>
              <h1 className='activities__title'>
                Implementación{' '}
                <btn onClick={() => setOpenModal(true)} className='activities__modal'>
                  <img src={Tooltip} alt='' />
                </btn>
                {openModal && <ModalInfo closeModal={setOpenModal} />}
              </h1>
              <div className='activities__accordeon'>
                <p className='activities__description'>Actividades de restauración</p>
                {data.activities.map((data, index) => {
                  return <Accordion key={index} title={data.name} content={data.description} />;
                })}
              </div>
            </section>
            <section className='map'>
              <h2 className='map__title'>Mapa de obras</h2>
              <div className='map__image'>
                <img src={mapaObras} alt='mapa de obras' />
              </div>
            </section>
            <section className='gallery-section'>
              <h2 className='gallery__title'>Galeria de imágenes</h2>
              <div className='gallery'>
                {data.images.map((image, index) => {
                  return (
                    <div key={index} className='gallery__image'>
                      <img className='gallery__photo' src={image} alt='' onClick={() => setOpenModal(true)} />
                      {openModal && <ModalGallery closeModal={setOpenModal} image={image} data={data} />}
                    </div>
                  );
                })}
              </div>
            </section>
            <section className='impact-section'>
              <h1 className='impact__title'>Impacto</h1>
              <div className='impact__cards'>
                {data.impact.map((impact, index) => {
                  return <BoxImpact key={index} impact={impact} />;
                })}
              </div>
            </section>
            <IntroSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
