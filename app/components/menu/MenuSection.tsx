'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import humanizeString from "humanize-string";
import Categories from './Categories';
import MenuItem from './MenuItem';
import Products from '../../api/menu/Products';


export default function MenuSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Products().then( data => {
      setProducts(data);
    })
  }, []);

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

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const itemList = products.filter(FILTER_MAP[filter]).map((item) => (
    <MenuItem item={item} key={item.id} />
  ));

  
  return(
    <div className="off-white-bg">
      <div className="container pb-5">
        <Categories filterNames={FILTER_NAMES} setFilter={setFilter} initialFilter={filter} />
        <h2 className="mb-5">{humanizeString(filter)}</h2>
        <div className="row">
          {itemList}
        </div>
      </div>
    </div>
  );
  
}