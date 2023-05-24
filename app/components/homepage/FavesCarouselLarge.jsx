'use client';

import { useEffect } from "react";
import FavesCard from './FavesCard';

export default function FavesCarouselLarge({products}){
  useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[]);

  return(
    <div id="favesLargeCarousel" className="carousel slide pt-4">
      <div className="carousel-controls">
        <button className="carousel-faves-prev" type="button" data-bs-target="#favesLargeCarousel" data-bs-slide="prev">
          <span className="chevron left" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-faves-next" type="button" data-bs-target="#favesLargeCarousel" data-bs-slide="next">
          <span className="chevron right" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="row">
            <div className="col">
              <FavesCard product={products[0]} />
            </div>
            <div className="col">
              <FavesCard product={products[1]} />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="row">
            <div className="col">
              <FavesCard product={products[2]} />
            </div>
            <div className="col">
              <FavesCard product={products[3]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}