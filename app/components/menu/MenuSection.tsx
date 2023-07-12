'use client';

import React, { useState, useEffect } from "react";
import { Link, scrollSpy } from 'react-scroll'
import humanizeString from "humanize-string";
import DietaryFilter from "./DietaryFilter";
import MenuItem from './MenuItem';
import ScrollToTop from '../ScrollToTop';
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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    scrollSpy.update();
    setLoading(false);
  }, [loading]);

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
      .filter(item => item.prefs.length < 1 || item.prefs?.filter(a => dietaryPrefs.includes(a)).length >= item.prefs.length)
      .map((item) => (
    <MenuItem item={item} category={category} key={item.id} />
  ))};

  
  return(
    <div className="off-white-bg">
      <div className="container-xxl py-5">
        { loading &&
            <div className={"text-center"}><Image className={"my-5"} src={"/images/loading-gif.gif"} alt={"page is loading"} height={100} width={100}></Image></div>
        }
        { !loading &&
            <>
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
                        <Image src={`/images/category-icons/${name}.png`} width={100} height={100} className="d-block mx-auto menu-img" alt={`${humanizeString(name)} category`} />
                        {humanizeString(name)}
                      </Link>
                    </li>
                )
              })}
              <li className={"nav-item"}><DietaryFilter dietaryReqs={dietaryReqs} setDietary={setDietaryReqs} dietaryPrefs={dietaryPrefs} setDietaryPrefs={setDietaryPrefs} /></li>
            </ul>
        </div>
        <div>
            {FILTER_NAMES.map((name:string) => {
              return(
                  <div id={name} key={`${name}-products`}>
                    <h2 className="my-5">{humanizeString(name)}</h2>
                    {name === "Platters" && <a href={"/Sushi-Sushi-Platters-June-2022.pdf"} className={"btn btn-sushi-secondary mb-5"} style={{marginTop: '-1rem'}}>Download our platter brochure</a> }
                    <div className="row mb-4">
                      {itemList(name)}
                    </div>
                    <ScrollToTop />
                  </div>
              );
            })}
        </div>
            </>
        }
      </div>
    </div>
  );
  
}