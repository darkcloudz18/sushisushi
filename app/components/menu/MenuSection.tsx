'use client';

import React, { useState } from "react";
import Categories from './Categories';
import MenuItem from './MenuItem';
import Data from './Data';


export default function MenuSection() {
  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    HandRoll: (item) => item.Group.Id == 2,
    BrownRice: (item) => item.Group.Id == 3
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const itemList = Data.filter(FILTER_MAP[filter]).map((item) => (
    <MenuItem item={item} key={item.Id} />
  ));

  
  return(
    <>
      <Categories filterNames={FILTER_NAMES} setFilter={setFilter} />
      <div className="container">
        <div className="row">
          {itemList}
        </div>
      </div>
    </>
  );
  
}