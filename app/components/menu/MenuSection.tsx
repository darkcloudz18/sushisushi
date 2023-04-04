'use client';

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Categories from './Categories';
import MenuItem from './MenuItem';
import Data from './Data';
// import getProducts from '../../api/menu/MenuData'


export default function MenuSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://10.8.18.150/products").then((data) => {
      console.log(data);
      setProducts(data.data);
    });
  }, []);

  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    HandRoll: (item) => item.Group.Id == 2,
    BrownRice: (item) => item.Group.Id == 3
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const itemList = products.filter(FILTER_MAP[filter]).map((item) => (
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