import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkData from './data/skateboard-parks.json';
import LandingPage from './views/LandingPage';


export default function App() {

  // const [dataProjects, setDataProjects] = useState();
  // fetch('https://fieldops-api.toroto.mx/api/projects')
  //   .then((response) => response.json())
  //   .then((data) =>  setDataProjects(data));


  return (
    <Router>
      <LandingPage />
    </Router>
  );
}
