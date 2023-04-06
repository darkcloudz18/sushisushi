'use client';

import { useEffect } from "react";
import FavesCard from './FavesCard';

export default function FavesCarouselLarge(){
  useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[]);

  return(
    <div id="favesCarousel" className="carousel slide pt-4">
      <div className="carousel-controls">
        <button className="carousel-faves-prev" type="button" data-bs-target="#favesCarousel" data-bs-slide="prev">
          <span className="chevron left" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-faves-next" type="button" data-bs-target="#favesCarousel" data-bs-slide="next">
          <span className="chevron right" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col">
              <FavesCard />
            </div>
            <div className="col">
              <FavesCard />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <FavesCard />
            </div>
            <div className="col">
              <FavesCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}