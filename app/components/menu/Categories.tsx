'use client';

import humanizeString from "humanize-string";
import {useState} from "react";
export default function Categories({filterNames, setFilter}) {

    const [activeCategory, setActiveCategory] = useState('HandRolls');

    const onCategoryClick = function (name) {
        setFilter(name);
        setActiveCategory(name);
    }

    return (
        <div className="row row-cols-auto d-flex justify-content-center py-5">
            {filterNames.map((name:string) => {
                return (
                    <div className="col" key={name}>
                        <button
                            className={`category-btn ${activeCategory == name ? 'active' : ''}`}
                            onClick={() => onCategoryClick(name)}
                        >
                            <img src={`/images/category-icons/${name}.png`} className="img-fluid d-block" alt={`${humanizeString(name)} category`} />
                            {humanizeString(name)}
                        </button>
                    </div>
                );
            })}
        </div>

    );
}