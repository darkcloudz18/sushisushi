'use client';

import humanizeString from "humanize-string";
import {useState} from "react";
export default function DietaryFilter({dietaryReqs, setDietary}) {

    const [filterOpen, setFilterOpen] = useState(false);
    const dietaryNames = [
        "Wheat",
        "Gluten",
        "Crustacea",
        "Mollusc",
        "Egg",
        "Milk",
        "Fish",
        "Peanut",
        "Soy",
        "Sesame",
        "TreeNuts",
        "Suplphites",
        "Lupin"
    ];

    const updateFilters = function (isChecked, name) {
        if(isChecked){
            setDietary([name].concat(dietaryReqs));
        } else {
            setDietary(dietaryReqs.filter(req => req !== name));
        }
    }

    return (
        <div className="py-5">
            <button type="button" className={`btn btn-outline-dark ${filterOpen? "d-none" : ""}`} onClick={() => setFilterOpen(true)}>Dietary Filter</button>
            <div className={`card ${filterOpen? "" : "d-none"}`}>
                <div className="card-body">
                    {dietaryNames.map((name:string) => {
                        return (
                            <div className="form-check" key={name}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={`check${name}`}
                                    onChange={(e) => updateFilters(e.target.checked, name)}
                                />
                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                    {humanizeString(name)}
                                </label>
                            </div>
                        );
                    })}
                    <button type="button" className="btn btn-sushi-secondary" onClick={() => setFilterOpen(false)}>Set Preferences</button>
                </div>
            </div>

        </div>

    );
}