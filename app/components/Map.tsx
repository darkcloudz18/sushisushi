'use client';

import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from "react";

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

class Map extends React.Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Map;