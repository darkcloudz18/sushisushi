'use client';

import '../styles/nav.scss';
import { useEffect } from "react";
import Image from 'next/image';

export default function Header() {
    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[]);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <Image
                        src="/images/SushiSushi_Stacked.png"
                        width={130}
                        height={58}
                        alt="Sushi Sushi logo"
                    />
                </a>
                <div>
                <button type="button" className="btn btn-sushi-primary d-inline-block d-lg-none me-3 order-mobile">Order Now</button>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav main-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/our_menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/our_stores">Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about_us">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://franchise.sushisushi.com.au/">Franchising</a>
                        </li>
                    </ul>
                    <div className="d-flex d-none d-lg-block">
                        <a href="/our_stores" className="btn btn-sushi-secondary me-2 location-button">
                            <Image src={"/images/pin.png"} alt={""} height={23} width={17} className={"me-2 align-top hide-on-hover"}></Image>
                            <Image src={"/images/pin-nori.png"} alt={""} height={23} width={17} className={"me-2 align-top show-on-hover"}></Image>
                            Find a Store</a>
                        <a href="https://sushisushi.orderup.com.au/" className="btn btn-sushi-primary">
                            <Image src={"/images/bag.png"} alt={""} height={23} width={18} className={"me-2 align-top"}></Image>
                            Order Now</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}