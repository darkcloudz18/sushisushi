'use client';

import React, { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import humanizeString from "humanize-string";
import Categories from './Categories';
import DietaryFilter from "./DietaryFilter";
import MenuItem from './MenuItem';
// import getProducts from '../../api/menu/Products';
import ProductStub from '../../api/menu/productstub'
import Image from "next/image";

export default function MenuSection() {
  // const [products, setProducts] = useState<{ [x: string]: any; }[]|null>([]);
  //
  // useEffect(() => {
  //   getProducts().then( data  => {
  //     setProducts(data);
  //   })
  // }, []);

  useEffect(() => {
    scrollSpy.update();
  });

  const initialFilter = useSearchParams()?.get('filter');

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

  const [dietaryReqs, setDietaryReqs] = useState<string[]>([]);
  const [dietaryPrefs, setDietaryPrefs] = useState<string[]>([
    "Vegetarian",
    "Chicken",
    "Seafood",
    "Beef"
  ]);

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const itemList = function (category) {
    return ProductStub.filter(FILTER_MAP[category])
      .filter(item => item.allergens == null || item.allergens?.filter(a => dietaryReqs.includes(a)).length <= 0)
      .filter(item => item.prefs?.filter(a => dietaryPrefs.includes(a)).length > 0)
      .map((item) => (
    <MenuItem item={item} category={category} key={item.id} />
  ))};

  
  return(
    <div className="off-white-bg">
      <div className="container py-5">
        <div className="sticky-top menu-nav">
            <ul className="nav menu-categories-nav text-center align-items-center nav-fill">
              {FILTER_NAMES.map((name:string) => {
                return(
                    <li id={`${name}-li`} className="nav-item" key={name}>
                      <Link
                          className={"nav-link"}
                          activeClass="active"
                          to={name}
                          spy={true}
                          smooth={true}
                          offset={-150}
                          onSetActive={() => document.getElementById(name+'-li')?.scrollIntoView({ inline: "start" })}
                      >
                        <Image src={`/images/category-icons/${name}.png`} width={100} height={100} className="d-block" alt={`${humanizeString(name)} category`} />
                        {humanizeString(name)}
                      </Link>
                    </li>
                )
              })}
              <li className={"nav-item"}><button className={"btn btn-sushi-secondary"}>Dietary Filter</button></li>
            </ul>
        </div>
        <div>
            {FILTER_NAMES.map((name:string) => {
              return(
                  <div id={name} key={`${name}-products`}>
                    <h2 className="my-5">{humanizeString(name)}</h2>
                    <div className="row">
                      {itemList(name)}
                    </div>
                  </div>
              );
            })}
        </div>
      </div>
    </div>
  );
  
}