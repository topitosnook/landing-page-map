import React, { useState, useEffect } from 'react';
import MetaDecorator from '../components/MetaDecorator';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import NavBar from '../components/NavBar';
import FirstSectionProject from '../components/FirstSectionProject';
import BoxImpact from '../components/BoxImpact';
import Accordion from '../components/Accordion';

export default function ProjectView({ dataProjects }) {
  const projectPath = window.location.pathname.substring(1);
  const [data, setData] = useState();

  useEffect(() => {
    dataProjects.data.forEach((project) => {
      if (project.id == projectPath) setData(project);
    });
  }, []);
  console.log(data);
  return (
    <>
      <MetaDecorator title='Toroto - proyecto' />
      <NavBar />
      <main className='content-wrap'>
        {data && (
          <>
            {/* <FirstSectionProject />
            <section>
              <h1>Problemática</h1>
              <p>{data.problem}</p>
            </section> */}
            <section className='activitiesSection'>
              {data.activities.map((data, index) => {
                return <Accordion key={index} title={data.name} content={data.description} />;
              })}
            </section>

            {/* <section>
              <h2>Mapa de obras</h2>
              <div>Aqui iría la imagen del mapa</div>
            </section> */}
            {/* <section className='gallerySection'>
              <h2>Galeria de imagenes</h2>
              <div className='imageGallery'>
                {data.images.map((image, index) => {
                  return (
                    <div key={index} className='imageProject'>
                      <img src={image} alt='' />
                    </div>
                  );
                })}
              </div>
            </section> */}
            {/* <section className='impactSection'>
              <h1>Impacto</h1>
              <div className='impactCards'>
                {data.impact.map((impact, index) => {
                  return <BoxImpact key={index} impact={impact} />;
                })}
              </div>
            </section> */}
            {/* <IntroSection /> */}
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
