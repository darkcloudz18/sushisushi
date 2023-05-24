'use client';

import { useEffect } from "react";
import FavesCard from './FavesCard';

export default function FavesCarouselSmall({products}){
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
          <FavesCard product={products[0]} />
        </div>
        <div className="carousel-item">
          <FavesCard product={products[1]} />
        </div>
        <div className="carousel-item">
          <FavesCard product={products[2]} />
        </div>
        <div className="carousel-item">
          <FavesCard product={products[3]} />
        </div>
      </div>
    </div>
  );
}