'use client';

import humanizeString from "humanize-string";
import {useState} from "react";
export default function Categories({filterNames, setFilter, initialFilter}) {

    const [activeCategory, setActiveCategory] = useState(initialFilter);

    const onCategoryClick = function (name) {
        setFilter(name);
        setActiveCategory(name);
    }

    return (
        <div className="row row-cols-7 d-flex justify-content-center py-5">
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