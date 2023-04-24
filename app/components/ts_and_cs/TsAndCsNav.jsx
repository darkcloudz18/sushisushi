'use client';

import {useEffect} from "react";

export default function TsAndCsNav() {

    useEffect(()=>{
        import("bootstrap/dist/js/bootstrap");
    },[]);

    return(
        <nav className="nav flex-column sticky-top">
            <a className="nav-link" href="#website-ts-and-cs">Website terms and conditions</a>
            <a className="nav-link" href="#privacy">Privacy</a>
            <a className="nav-link" href="#online-ordering">Online Ordering</a>
            <a className="nav-link" href="#family">Family and Friends discount</a>
            <hr className="d-block d-md-none" />
        </nav>
    );
};