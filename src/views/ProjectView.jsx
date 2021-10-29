import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import NavBar from '../components/NavBar';
import FirstSectionProject from '../components/FirstSectionProject';

export default function ProjectView({ dataProjects }) {
  const projectPath = window.location.pathname.substring(1);
  const [data, setData] = useState();

  useEffect(() => {
    dataProjects.data.forEach((project) => {
      if (project.id == projectPath) setData(project);
    });
  }, []);

  return (
    <>
      <NavBar />
      <main className='content-wrap'>
        {data && (
          <>
            <FirstSectionProject />
            <section>Problematica</section>
            <section>
              <h1>implementacion</h1>
              <div>Acordeones de actividades de restauracion</div>
            </section>
            <section>Mapa de obras</section>
            <section>Galeria de imagenes</section>
            <section>impacto: cajas con la info (dinamico)</section>
            <IntroSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
