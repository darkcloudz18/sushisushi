'use client';

export default function Hero() {
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="/our-stores">
                        <div className="hero-container-img">
                            <img src={"/images/hero/asahi-desktop-full.png"} className={"img-fluid desktop-hero"}/>
                            <img src={"/images/hero/asahi-mobile-full.png"} className={"img-fluid mobile-hero"}/>
                        </div>
                    </a>
                </div>
                <div className="carousel-item">
                    <a href="/our-stores">
                        <div className="hero-container-img">
                            <img src={"/images/hero/desktop-full.png"} className={"img-fluid desktop-hero"}/>
                            <img src={"/images/hero/mobile-full.png"} className={"img-fluid mobile-hero"}/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}