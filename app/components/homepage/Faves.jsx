'use client';

import FavesCarouselLarge from './FavesCarouselLarge';
import FavesCarouselSmall from './FavesCarouselSmall';

export default function Faves() {
    const faveProducts = [
        {
            "id": "207",
            "category": "hand_rolls",
            "group": "White Rice H/Roll",
            "name": "Special California",
            "description": "Seafood salad mix, housemade mayonnaise, tobiko and fresh avocado"
        },
        {
            "id": "310",
            "category": "packs",
            "name": "Bento Box",
            "description": "20 piece pack - mini tobiko, plain inari, tamago nigiri, prawn nigiri, salmon nigiri, salmon nigiri, sashimi, seaweed salad and salted edamame"
        },
        {
            "id": "151",
            "category": "packs",
            "name": "Spicy Crunchy Cooked Tuna Pack",
            "description": "8 pieces of inside out sushi with cooked tuna with sprinkles of fried shallots."
        },
        {
            "id": "1052",
            "category": "deluxe",
            "name": "Rainbow Uramaki",
            "description": "Salmon belly, tamago egg, fresh  avocado and cucumber, housemade mayonnaise and teriyaki sauce"
        }
    ];

    return (
        <div className="faves-container py-5">
            <div className="container">
                <h2 className="section-title-white">Our Favourites</h2>
                <div className="d-none d-lg-block">
                  <FavesCarouselLarge products={faveProducts} />
                </div>
                <div className="d-block d-lg-none">
                  <FavesCarouselSmall products={faveProducts} />
                </div>
            </div>
        </div>
    );
}