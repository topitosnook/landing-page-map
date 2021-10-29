import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

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
      <main className='content-wrap'>{data && <div>Aqui va el projecto {data.id}</div>}</main>
      <Footer />
    </>
  );
}
