'use client';

import Image from "next/image";

export default function BromleyArt(){
    return(
        <div className="container py-5">
            <div className={"row"}>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>THE ART OF SUSHI SUSHI</h2>
                    <p>We’ve turned high end restaurant fare into low fuss takeaway by treating the making of our food as an artform. We take a great deal of care in the quality and taste of our ingredients and the presentation of our food.</p>
                    <p>We source Japanese ingredients for authenticity and local produce for freshness. And while we’re incredibly proud of our products, it’s a quiet pride drawn from a genuine belief in what we’re doing and the 25 years of success it’s brought us.</p>
                    <p className={"lead fw-bold"}>INTRODUCING DAVID AND YUGE BROMLEY</p>
                    <p>We’re delighted to have David and Yuge Bromley, owners of Bromley&Co as our Directors of Creative Innovation, bringing two iconic Australian brands and making art accessible to sushi lovers across the country. A feast for the eyes and for the tummy, the partnership brings to life The Art of Sushi Sushi drawing on the time, patience, skill and aesthetics of sushi and art.</p>
                    <figure className={"mb-3"}>
                        <blockquote className="blockquote">
                            <p className={"fst-italic"}>We believe there is a deep connection between the two fields of Japanese food and art; both involve time, beauty and craft in order to create something people love.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            David and Yuge Bromley
                        </figcaption>
                    </figure>
                    <p className={"lead fw-bold"}>ART YOU CAN TAKE AWAY </p>
                    <p>We only wrap our sushi in the best. And we don’t just mean the highly sought after first batch Japanese nori. All of our packaging is sustainably produced as well. So it doesn’t just look beautiful, it’s recyclable to lessen any impact on the planet. Each piece in the series has been specifically designed as a feast for the eyes to be enjoyed while eating your beautiful sushi.</p>
                </div>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={636} height={720} className={"img-fluid"} src={"/images/theart.jpeg"} alt={"Image showing plates of sushi"}/>
                </div>
            </div>
        </div>
    );
}