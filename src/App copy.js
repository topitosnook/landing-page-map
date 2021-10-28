import React, { useState } from 'react';
import './styles/App.css';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as parkData from './data/skateboard-parks.json';



export default function App() {

  // const [data, setData] = useState();
  // fetch('https://fieldops-api.toroto.mx/api/projects')
  //   .then((response) => response.json())
  //   .then((info) =>  setData(info));

  // Configuración del mapa
  const [viewport, setViewport] = useState({
    latitud: 45.4211,
    longitud: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10
  });
  return (
    <div>
      {/* <ReactMapGL {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <div clas>SKATE</div>
          </Marker>
        ))}
      </ReactMapGL> */}
    </div>
  );
}
