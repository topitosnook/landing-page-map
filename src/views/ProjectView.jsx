import React, { useState, useEffect } from 'react';
import MetaDecorator from '../components/MetaDecorator';
import Footer from '../components/Footer';
import IntroSection from '../components/IntroSection';
import NavBar from '../components/NavBar';

import ProjectIntro from '../components/Projects/ProjectIntro';
import SectionImpact from '../components/Projects/SectionImpact';
import SectionGallery from '../components/Projects/SectionGallery';
import SectionWorkMap from '../components/Projects/SectionWorkMap';
import SectionActivities from '../components/Projects/SectionActivities';
import SectionProblem from '../components/Projects/SectionProblem';

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
  return (
    <>
      {data !== undefined && <MetaDecorator title={`Toroto - ${data.location}`} />}
      <NavBar />
      <main className='content-wrap'>
        {data !== undefined && (
          <>
            {index !== undefined && <ProjectIntro data={data} image={images[index]} />}
            <SectionProblem data={data} />
            <SectionActivities data={data} openModal={openModal} setOpenModal={setOpenModal} />
            <SectionWorkMap />
            <SectionGallery data={data} openModal={openModal} setOpenModal={setOpenModal} />
            <SectionImpact data={data} />
            <IntroSection />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
