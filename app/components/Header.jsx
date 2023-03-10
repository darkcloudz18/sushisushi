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
                <a className="navbar-brand" href="#">
                    <Image
                        src="/images/logo_with_koi.png"
                        width={173}
                        height={106}
                        alt="Sushi Sushi logo"
                    />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Stores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Careers</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://franchise.sushisushi.com.au/">Franchising</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button type="button" className="btn btn-secondary">Find a Store</button>
                        <button type="button" className="btn btn-primary ms-2">Order Now</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}