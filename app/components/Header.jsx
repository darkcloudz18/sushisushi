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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/our_menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/our_stores">Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://franchise.sushisushi.com.au/">Franchising</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="/our_stores" className="btn btn-sushi-secondary me-2">Find a Store</a>
                        <a href="https://sushisushi.orderup.com.au/" className="btn btn-sushi-primary d-none d-lg-block">Order Now</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}