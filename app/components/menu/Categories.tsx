'use client';

import humanizeString from "humanize-string";
import {useEffect, useState} from "react";
export default function Categories({filterNames, setFilter, initialFilter}) {

    const [activeCategory, setActiveCategory] = useState(initialFilter);

    const onCategoryClick = function (name) {
        setFilter(name);
        setActiveCategory(name);
    }

    return(
        <nav id={"categories-nav"} className="nav sticky-top nav-fill">
            {filterNames.map((name:string) => {
                return(
                    <a
                        className={"nav-link"}
                        href={`#${name}`}
                        key={name}
                    >
                        <img src={`/images/category-icons/${name}.png`} className="img-fluid d-block" alt={`${humanizeString(name)} category`} />
                        {humanizeString(name)}
                    </a>)
            })}
        </nav>
    );

}