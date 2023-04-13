'use client';

import { GoogleMap, LoadScript, Autocomplete, MarkerF } from '@react-google-maps/api';
import React, { useState } from "react";
import StoreData from "../../api/stores/stores";
import StoreCard from "./StoreCard";

const libraries = ["places"];

export default function Map(){
  
  const containerStyle = {
    height: '500px',
    width: '500px'
  };

  const [autocomplete, setAutocomplete] = useState(null);
  const [map, setMap] = useState(null);
  const [bounds, setBounds] = useState({
    "south": -45.15458769298096,
    "west": 112.38214975000002,
    "north": -6.756873500727103,
    "east": 156.32746225000002
  });

  const [center, setCenter] = useState({
    lat: -27.610112,
    lng: 134.354806
  });

  const storeFilter = function (store) {
    return store.latitude >= bounds.south && store.latitude <= bounds.north && store.longitude >= bounds.west && store.longitude <= bounds.east
  };

  const storeList = StoreData.filter((store) => storeFilter(store) ).map((store) => (
      <StoreCard store={store} key={store.store_id} />
  ));

  const storeMarkers = StoreData.map((store) => (
      <MarkerF position={{lat: store.latitude, lng: store.longitude}} key={store.store_id} />
  ));
  

  const onPlaceChanged = function(){
    if (autocomplete !== null && map !== null) {
      console.log(autocomplete.getPlace());
      let geometry = autocomplete.getPlace().geometry;
      map.fitBounds(geometry.viewport);
    }
  };

  const onBoundsChanged = function () {
    if (autocomplete !== null && map !== null) {
      const mapBounds = map.getBounds();
      const ne = mapBounds.getNorthEast();
      const sw = mapBounds.getSouthWest();
      setBounds({
        south: sw.lat(),
        west: sw.lng(),
        north: ne.lat(),
        east: ne.lng()
      });
      console.log(bounds);
    }
  };

  return (
      <>
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
            onBoundsChanged={onBoundsChanged}
          >
            {storeMarkers}
          </GoogleMap>
        </LoadScript>
        <div className="container">
          {storeList}
        </div>
      </>
    );

}