'use client';

import { GoogleMap, LoadScript, Autocomplete, useGoogleMap } from '@react-google-maps/api';
import React, { useState } from "react";

const libraries = ["places"];

export default function Map(){
  
  const containerStyle = {
    height: '500px'
  };

  const [autocomplete, setAutocomplete] = useState(null);
  const [map, setMap] = useState(null);

  const [center, setCenter] = useState({
    lat: -27.610112,
    lng: 134.354806
  });
  

  const onPlaceChanged = function(){
    if (autocomplete !== null && map !== null) {
      console.log(autocomplete.getPlace());
      let geometry = autocomplete.getPlace().geometry;
      map.fitBounds(geometry.viewport);
    }
  };

  return (
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API}
        region="AU"
        libraries={libraries}
      >
        <Autocomplete
          onLoad={(autocomplete) => setAutocomplete(autocomplete)}
          onPlaceChanged={onPlaceChanged}
          restrictions={{country: "AU"}}
          >
            <input
              type="text"
              placeholder="Customise your placeholder"
            />
          </Autocomplete>
        <GoogleMap
          onLoad={(map) => setMap(map)}
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
        >
        </GoogleMap>
      </LoadScript>
    );

}