'use client';

import Image from "next/image";

export default function Hawksburn() {
    return(
        <div className="container py-5">
            <div className={"row d-flex align-items-center justify-content-center"}>
                <div className={"col-12 col-lg-6 py-2"}>
                    <p className={"lead fw-bold"}>Sushi Sushi x Bromley&Co concept store at Sushi Sushi Hawksburn. Sushi, hot food, art and unique Bromley x Sushi Sushi merchandise all available for purchase. Open 7 days.</p>
                </div>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={1024} height={591} className={"img-fluid"} src={"/images/hawksburn.jpeg"} alt={"Image the Hawksburn concept store"}/>
                </div>
            </div>
        </div>
    );
}