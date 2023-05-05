'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import humanizeString from "humanize-string";
import Categories from './Categories';
import DietaryFilter from "./DietaryFilter";
import MenuItem from './MenuItem';
// import Products from '../../api/menu/Products';
import ProductStub from '../../api/menu/productstub'

export default function MenuSection() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   Products().then( data => {
  //     setProducts(data);
  //   })
  // }, []);

  const initialFilter = useSearchParams().get('filter');

  const [filter, setFilter] = useState( initialFilter? initialFilter : 'HandRolls');

  const FILTER_MAP = {
    HandRolls: (item) => item.category == "hand_rolls" && item.group.includes("White Rice"),
    BrownRice: (item) => item.category == "hand_rolls" && item.group.includes("Brown Rice"),
    Packs: (item) => item.category == "packs",
    Platters: (item) => item.category == "platters",
    Deluxe: (item) => item.category == "deluxe",
    Salads: (item) => item.category == "salads",
    HotFood: (item) => item.category == "hot_food"
  };

  const [dietaryReqs, setDietaryReqs] = useState([]);

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const itemList = ProductStub.filter(FILTER_MAP[filter])
      .filter(item => item.allergens == null || item.allergens?.filter(a => dietaryReqs.includes(a)).length <= 0)
      .map((item) => (
    <MenuItem item={item} key={item.id} />
  ));

  
  return(
    <div className="off-white-bg">
      <div className="container pb-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <Categories filterNames={FILTER_NAMES} setFilter={setFilter} initialFilter={filter} />
          </div>
          <div className="col-12 col-md-4 align-self-center">
            <DietaryFilter dietaryReqs={dietaryReqs} setDietary={setDietaryReqs} />
          </div>
        </div>
        <h2 className="mb-5">{humanizeString(filter)}</h2>
        <div className="row">
          {itemList}
        </div>
      </div>
    </div>
  );
  
}