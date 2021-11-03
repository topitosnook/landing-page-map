import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidG9waXRvc25vb2siLCJhIjoiY2t2YjBvOXAxMDlxZjJucWlmZXExbXVycCJ9.uMcOk3qZ5Ag08Ley71H8VA';

export default function Mapbox({ dataProjects, images }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-108.8548);
  const [lat, setLat] = useState(22.9856);
  const [zoom, setZoom] = useState(4);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      interactive: false,
    });

    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
      interactive: false,
    });
    map.current.scrollZoom.disable();

    //MARKERS
    dataProjects.data.forEach((project) => {
      const id = project.id;

      const marker = new mapboxgl.Marker({
        color: '#00000',
        draggable: false,
        className: 'marker',
      })
        .setLngLat(project.geometry.coordinates[0][3])
        .setPopup(
          new mapboxgl.Popup({ id: `${id}`, className: 'popup-map', anchor: 'bottom' })
            .setHTML(`<img class="popup-img" src="${images[0]}"><p class="popup__location">${project.location}</p><h1 class="popup__name">${project.name}</h1>
        <p class="popup__description">${project.description}</p> <div class="container-link"><a class="link-page" href="/landing-page-map/${project.id}">VER PROYECTO COMPLETO</a><div>`)
        )
        .addTo(map.current);
    });
  });
  return (
    <div className='mapbox-container'>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}
