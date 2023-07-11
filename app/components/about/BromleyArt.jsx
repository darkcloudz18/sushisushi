'use client';

import Image from "next/image";

export default function BromleyArt(){
    return(
        <div className={"nori-bg"}><div className="container py-5">
            <div className={"row d-flex align-items-center justify-content-center"}>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={636} height={357} className={"img-fluid"} src={"/images/bromleys.jpeg"} alt={"Image showing plates of sushi"}/>
                </div>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>INTRODUCING DAVID AND YUGE BROMLEY</h2>
                    <p>We’re delighted to have David and Yuge Bromley, owners of Bromley&Co as our Directors of Creative Innovation, bringing two iconic Australian brands together and making art accessible to sushi lovers across the country. A feast for the eyes and for the tummy, the partnership brings to life The Art of Sushi Sushi drawing on the time, patience, skill and beautiful aesthetics of sushi and art.</p>
                    <figure className={"mb-3"}>
                        <blockquote className="blockquote fs-6">
                            <p className={"fst-italic"}>We believe there is a deep connection between the two fields of Japanese food and art; both involve time, beauty and craft in order to create something people love.</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            David and Yuge Bromley
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div></div>
    );
}