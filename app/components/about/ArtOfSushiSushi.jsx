'use client';

import Image from "next/image";

export default function ArtOfSushiSushi() {
    return(
        <div className="container py-5">
            <div className={"row d-flex align-items-center justify-content-center"}>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>THE ART OF SUSHI SUSHI</h2>
                    <p>The Art of Sushi Sushi is a journey of discovery across our food, art, Japanese culture and design where the beauty of tradition meets the spirit of innovation.</p>
                    <p>We’ve turned high end restaurant fare into low fuss takeaway by treating the making of our food as an artform. We take a great deal of care in the quality and taste of our ingredients and the presentation of our food. Our skilled sushi artisans craft each menu item with passion, transforming the freshest ingredients into edible works of art.</p>
                    <p>We source Japanese ingredients for authenticity and local produce for freshness. And while we’re incredibly proud of our products, it’s a quiet pride drawn from a genuine belief in what we’re doing and the 25 years of success it’s brought us.</p>
                </div>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={270} height={280} className={"img-fluid"} src={"/images/THEARTOFSUSHISUSHI_BLACKTEXT_TRANSPARENCY.png"} alt={"Image showing a composition of the different art used by Sushi Sushi"}/>
                </div>
            </div>
        </div>
    );
}