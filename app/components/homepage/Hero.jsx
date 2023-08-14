'use client';

export default function Hero() {
    return (
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <a href="/our-stores">
                        <div className="hero-container-img">
                            <img src={"/images/hero/asahi-desktop-full.jpg"} className={"img-fluid desktop-hero"}/>
                            <img src={"/images/hero/asahi-mobile-full.jpg"} className={"img-fluid mobile-hero"}/>
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
            <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}