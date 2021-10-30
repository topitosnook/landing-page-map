import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkData from './data/skateboard-parks.json';
import LandingPage from './views/LandingPage';
import ProjectView from './views/ProjectView';
import imgProject1 from './assets/img/img_project_1.png';
import imgProject2 from './assets/img/img_project_2.png';
import imgProject3 from './assets/img/img_project_3.png';
import imgProject4 from './assets/img/img_project_4.png';

export default function App() {
  const images = [imgProject1,imgProject2,imgProject3,imgProject4];
  const [dataProjects, setDataProjects] = useState();

  useEffect(() => {
    fetch('https://fieldops-api.toroto.mx/api/projects')
      .then((response) => response.json())
      .then((data) => setDataProjects(data));
  }, []);
  console.log(name);

  return (
    <Router>
      {
        dataProjects &&
        <Switch>
          <Route path='/' exact>
            <LandingPage dataProjects={dataProjects} images={images}/>
          </Route>
          <Route path='/:id'>
            <ProjectView dataProjects={dataProjects} images={images}/>
          </Route>
        </Switch>

      }
    </Router>
  );
}
