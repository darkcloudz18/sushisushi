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
        <>
            <button className="btn btn-outline-dark filter-btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasFilter" aria-controls="offcanvasFilter">
                Dietary Filter
            </button>

            <div className="offcanvas offcanvas-end offcanvas-filter text-start" tabIndex={-1} id="offcanvasFilter"
                 aria-labelledby="offcanvasFilterLabel">
                <div className="offcanvas-header px-5">
                    <h3 className="offcanvas-title" id="offcanvasFilterLabel">Dietary Filter</h3>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body px-5">
                    <hr className={"my-0"}/>
                    <div className="pt-3">
                        <p className={"lead fw-bold"}>Select Your Preference</p>
                        <p>Selecting one of these boxes includes it in the results</p>
                    </div>
                    <div className="row row-cols-2">
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
                    <div className="pt-3">
                        <hr className={"mb-4"}/>
                        <p className={"lead fw-bold"}>Filter Out Dietary Requirements</p>
                        <p>Selecting one of these boxes removes it from the results</p>
                    </div>
                    <div className="row row-cols-2">
                    {dietaryNames.map((name:string) => {
                        return (
                            <div className="col" key={name}>
                                <div className="form-check">
                                    <input
                                        className="form-check-input cross-checkbox"
                                        type="checkbox"
                                        id={`check${name}`}
                                        checked={dietaryReqs.includes(name)}
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
                    <p className="font-small py-2">These filters should be used for dietary preferences, not allergens. No food products in our stores are sold as allergen free, vegetarian or vegan as there is always a risk of allergen traces due to cross-contact. <a target={"_blank"} href={"/Allergen-Matrix-May-2023.pdf"}>Read our full allergen information here</a></p>
                    <button type="button" className="btn btn-sushi-primary w-100 mb-3" data-bs-dismiss="offcanvas" aria-label="Close">Done</button>
                    <button type="button"
                            className="btn btn-sushi-secondary w-100"
                            onClick={() => {
                                setDietaryPrefs(dietaryPrefNames);
                                setDietary([]);
                            }}>
                        Reset filter
                    </button>
                </div>
            </div>
        </>

    );
}