'use client';


import Image from "next/image";

export default function ArtOfSushi() {
    return(
        <div className="container py-5">
            <div className={"row"}>
                <div className={"col-12 col-md-6 py-1"}>
                    <p className={"lead"}>Back in 1998 we opened our first store opened in Box Hill, Victoria with aspirations to change how Australians eat sushi. Our dream was to take it from high-end Japanese restaurants and make it a fresh, healthy on the go meal available for everyone to enjoy.</p>
                    <p>So successful was the venture, we’re now approaching 170 Sushi Sushi stores nationally, making us the biggest and most loved sushi brand in Australia.</p>
                    <p>We’ve put the impossible to find everywhere and made the complex simple. We’re the sushi pioneers of Australia and that’s a lot to be proud of!</p>
                    <p>Our success comes from the quality and consistency of our sushi. We’ve made little change to our core product and format over the last 25 years, because after all it’s stood the test of time for thousands of years in Japan.</p>
                    <p>Sushi Sushi is differentiated from other brands by our focus on premium quality, authentic Japanese ingredients coupled with local fresh produce. Our Japanese inspired food is made fresh daily and this is why <b>we’re Australia’s number one sushi retailer.</b></p>
                </div>
                <div className={"col-12 col-md-6 salmon-bg p-2 d-flex align-items-center justify-content-center"}>
                    <Image width={636} height={420} className={"img-fluid"} src={"/images/about-train.jpg"} alt={"Image showing plates of sushi"}/>
                </div>
            </div>
        </div>
    );
}