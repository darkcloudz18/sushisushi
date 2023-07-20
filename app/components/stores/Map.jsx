'use client';

import {GoogleMap, LoadScript, Autocomplete, MarkerF} from '@react-google-maps/api';
import React, {useEffect, useState} from "react";
import StoreCard from "./StoreCard";
import distanceBetweenPointsInKm from "../../api/stores/MapDistances";
import Image from "next/image";

const libraries = ["places"];

export default function Map({storeData, searchLabel}) {

    const [loading, setLoading] = useState(true);

    const containerStyle = {
        height: '500px'
    };

    const [autocomplete, setAutocomplete] = useState(null);
    const [map, setMap] = useState(null);
    const [mapCenter, setMapCenter] = useState(null);

    const [center, setCenter] = useState({
        lat: -27.610112,
        lng: 134.354806
    });

    const storeList = storeData
        .map((store) => {
            if (mapCenter !== null) {
                store.distance = distanceBetweenPointsInKm(mapCenter.lat(), mapCenter.lng(), store.latitude, store.longitude);
            } else {
                store.distance = 0;
            }
            return store;
        })
        .sort((a, b) => a.distance - b.distance)
        .map((store) => {
            return <StoreCard store={store} key={store.store_id}/>
        });

    const storeMarkers = storeData.map((store) => (
        <MarkerF position={{lat: store.latitude, lng: store.longitude}} icon={"/images/marker.png"}
                 key={store.store_id}/>
    ));


    const onPlaceChanged = function () {
        if (autocomplete !== null && map !== null) {
            map.fitBounds(autocomplete.getPlace().geometry.viewport);
            setMapCenter(map.getCenter());
        }
    };

    const onBoundsChanged = function () {
        if (autocomplete !== null && map !== null) {
            setMapCenter(map.getCenter());
        }
    };

    return (
        <div className="container">
            {loading &&
                <div className={"text-center"}><Image className={"my-5"} src={"/images/loading-gif.gif"}
                                                      alt={"page is loading"} height={100} width={100}></Image></div>
            }
            <div className={loading ? "d-none" : ""}>
                <LoadScript
                    googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API}
                    region="AU"
                    libraries={libraries}
                >
                    <div className="row justify-content-center my-5">
                        <div className="col-12 col-md-6">
                            <h3 className="section-title-salmon">{searchLabel}</h3>
                            <Autocomplete
                                onLoad={(autocomplete) => setAutocomplete(autocomplete)}
                                onPlaceChanged={onPlaceChanged}
                                restrictions={{country: "AU"}}
                            >
                                <input
                                    type="text"
                                    placeholder="Search for a location"
                                    className="form-control mb-3"
                                />
                            </Autocomplete>
                            <GoogleMap
                                onLoad={(map) => {
                                    setMap(map);
                                    setLoading(false);
                                }}
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={4}
                                onBoundsChanged={onBoundsChanged}
                            >
                                {storeMarkers}
                            </GoogleMap>
                        </div>
                    </div>
                </LoadScript>
                <div className="row justify-content-center"> {storeList} </div>
            </div>
        </div>
    );

}