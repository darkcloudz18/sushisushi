'use client';

import Image from "next/image";

export default function TakeawayArt() {
    return(
        <div className="container py-5">
            <div className={"row d-flex align-items-center justify-content-center"}>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>ART YOU CAN TAKE AWAY</h2>
                    <p>We only wrap our sushi in the best. And we don’t just mean the highly sought after first batch Japanese nori. All of our packaging is sustainably produced as well. So it doesn’t just look beautiful, it’s recyclable to lessen any impact on the planet. Each piece in the series has been specifically designed as a feast for the eyes to be enjoyed while eating your beautiful sushi.</p>
                </div>
                <div className={"col-12 col-lg-6"}>
                    <Image width={1500} height={1001} className={"img-fluid"} src={"/images/box-stack.png"} alt={"Image showing a composition of the different art used by Sushi Sushi"}/>
                </div>
            </div>
        </div>
    );
}