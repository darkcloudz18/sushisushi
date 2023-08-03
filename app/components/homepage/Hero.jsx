'use client';

export default function Hero() {
    return (
        <a href="/our-stores">
            <div className="hero-container-img">
                <img src={"/images/hero/desktop-full.png"} className={"img-fluid desktop-hero"}/>
                <img src={"/images/hero/mobile-full.png"} className={"img-fluid mobile-hero"}/>
            </div>
        </a>
    );
}