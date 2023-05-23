'use client';

import humanizeString from "humanize-string";
import {useState} from "react";
export default function DietaryFilter({dietaryReqs, setDietary, dietaryPrefs, setDietaryPrefs}) {

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
        "Sulphites",
        "Lupin"
    ];

    const dietaryPrefNames = [
        "Vegetarian",
        "Chicken",
        "Seafood",
        "Beef"
    ];

    const updateFilters = function (isChecked, name) {
        if(isChecked){
            setDietary([name].concat(dietaryReqs));
        } else {
            setDietary(dietaryReqs.filter(req => req !== name));
        }
    }

    const updatePrefs = function (isChecked, name) {
        if(isChecked){
            setDietaryPrefs([name].concat(dietaryPrefs));
        } else {
            setDietaryPrefs(dietaryPrefs.filter(req => req !== name));
        }
    }

    return (
        <div className="position-relative">
            <div className="text-center mt-auto">
                <button type="button" className={`btn btn-outline-dark px-5 ${filterOpen? "d-none" : ""}`} onClick={() => setFilterOpen(true)}>Dietary Filter</button>
            </div>
            <div className={`card ${filterOpen? "" : "d-none"} dietary-filter`}>
                <div className="card-body">
                    <div className="text-center py-3">
                        <h3>Dietary Filter</h3>
                        <hr/>
                        <p className={"lead"}>Select your dietary preferences</p>
                    </div>
                    <div className="row row-cols-2 px-4">
                        {dietaryPrefNames.map((name:string) => {
                            return (
                                <div className="col" key={name}>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`check${name}`}
                                            checked={dietaryPrefs.includes(name)}
                                            onChange={(e) => updatePrefs(e.target.checked, name)}
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {humanizeString(name)}
                                        </label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="text-center py-3">
                        <hr/>
                        <p className={"lead"}>Select which allergens to filter out</p>
                    </div>
                    <div className="row row-cols-2 px-4">
                        {dietaryNames.map((name:string) => {
                            return (
                                <div className="col" key={name}>
                                    <div className="form-check">
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
                                </div>
                            );
                        })}
                    </div>
                    <div className={"py-3"}>
                        <button type="button" className="btn btn-sushi-primary w-100" onClick={() => setFilterOpen(false)}>Set Preferences</button>
                    </div>
                </div>
            </div>

        </div>

    );
}