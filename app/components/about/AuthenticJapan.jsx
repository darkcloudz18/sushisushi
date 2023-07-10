'use client';

import Image from "next/image";

export default function AuthenticJapan() {
    return(
        <div className={"salmon-bg"}><div className={"container py-5"}>
            <div className={"row"}>
                <div className={"col-12 col-lg-6 d-flex align-items-center justify-content-center"}>
                    <Image width={636} height={954} className={"img-fluid"} src={"/images/WEB_SushiTrain.jpg"} alt={"Image showing plates of sushi"}/>
                </div>
                <div className={"col-12 col-lg-6 py-2"}>
                    <h2>JAPAN FOR AUTHENTICITY, LOCAL FOR FRESH</h2>
                    <p><span className={"lead fw-bold"}>NORI</span><br/>Our nori comes from the seas off Japan where the water is cold and rich with mineral content, enhancing the taste of nori seaweed. It’s cropped once a year, then graded by its quality before being sold at auction. It’s then carefully stored to preserve its integrity before being roasted, ensuring its delicate taste and texture. This nori is rare to find in Australia, and only the finest sushi makers have access to it. Only the finest sushi makers and you. Because when you eat our hand rolls, that’s exactly what you’re holding.</p>
                    <p><span className={"lead fw-bold"}>SUSHI RICE VINEGAR</span><br/>Our vinegar is produced in the Japanese Alps area by a brewer established in 1876. Surrounded by crystal clear water and fresh air – both vital to producing the highest quality vinegar – it’s derived from rice grain which makes it gluten free. It’s then processed using the same method as sake brewing, creating a mild and sweet vinegar with an excellent depth of taste. No other vinegar in the world brews in this method.</p>
                    <p><span className={"lead fw-bold"}>SOY SAUCE </span><br/>Umami. The greatest flavour in existence. Sure, we’re biased, but we’re sticking to it. Our soy sauce is traditional Japanese soy sauce. We’re talking exclusive-supplier-founded-in-18th-century-Japan traditional. But, somehow, also modern. Because it’s gluten free. There’s nothing our soy sauce can’t do!</p>
                    <p><span className={"lead fw-bold"}>FRESH PRODUCE</span><br/>Straight from the farm to our customers, quality matters. That’s why we source fresh, local produce for our sushi that’s handpicked.</p>
                    <p><span className={"lead fw-bold"}>ETHICALLY SOURCED SALMON</span><br/>Why is our salmon so good? It’s all sustainably farmed in Tassie. We only buy fresh… and it’s just too far to swim!</p>
                    <p><span className={"lead fw-bold"}>OUR COMMITMENT TO THE FUTURE </span><br/>Sushi Sushi is passionate about helping build a socially responsible and environmentally conscious world that our people, communities and future generations can be proud of. We’re focused on reducing our impact on the environment and ensuring we deliver products that are delicious and align with our commitment to sustainability.</p>
                </div>
            </div>
        </div></div>
    );
}