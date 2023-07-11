'use client';

import Image from "next/image";

export default function KoiStory() {
    return(
        <div className={"ocean-bg"}><div className="container py-5">
            <div className={"row d-flex align-items-center justify-content-center"}>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={447} height={456} className={"img-fluid"} src={"/images/koi-wall.jpeg"} alt={"Image of two koi wall decorations"}/>
                </div>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>OUR KOI FISH LOGO</h2>
                    <p>The koi fish, our main brand icon, holds deep symbolism in Japanese culture and represents various qualities that resonate with our core company values. Known for their vibrant colours, the koi is associated with good fortune, prosperity, courage and determination. In Japanese folklore, koi fish are often depicted as transformational creatures capable of swimming upstream against strong currents, where they will eventually evolve into a majestic dragon.</p>
                    <p>Just as a koi’s elegant and graceful movements evoke a sense of harmony and balance, we aim to create the perfect harmony between taste, texture and presentation. Every dish that leaves our kitchen is a testament to our dedication to perfection and a reflection of our passion.</p>
                </div>
            </div>
        </div></div>
    );
}