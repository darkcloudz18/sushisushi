'use client';

import FavesCarouselLarge from './FavesCarouselLarge';
import FavesCarouselSmall from './FavesCarouselSmall';

export default function Faves() {
    
    return (
        <div className="faves-container py-5">
            <div className="container">
                <h2 className="section-title-white">Our Favourites</h2>
                <div className="d-none d-lg-block">
                  <FavesCarouselLarge />
                </div>
                <div className="d-block d-lg-none">
                  <FavesCarouselSmall />
                </div>
            </div>
        </div>
    );
}