import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoidG9waXRvc25vb2siLCJhIjoiY2t2YjBvOXAxMDlxZjJucWlmZXExbXVycCJ9.uMcOk3qZ5Ag08Ley71H8VA';

export default function Mapbox({ dataProjects }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-98.98);
  const [lat, setLat] = useState(19.4);
  const [zoom, setZoom] = useState(4);
  // const marker = new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
    // disable map zoom when using scroll
    map.current.scrollZoom.disable();
    //MARKERS
    dataProjects.data.forEach((project) => {
      console.log(project);
      // const marker = new mapboxgl.Marker({
      //   color: '#FFFFFF',
      //   draggable: false,
      // })
      //   .setLngLat([-92.31740713119507, 15.188183227403146])
      //   .setPopup(new mapboxgl.Popup().setHTML('<h1>Hello World!</h1>'))
      //   .addTo(map.current);
      // marker.togglePopup(); // toggle popup open or closed
    });
  });
  return (
    <div>
      <div ref={mapContainer} className='map-container' />
    </div>
  );
}
