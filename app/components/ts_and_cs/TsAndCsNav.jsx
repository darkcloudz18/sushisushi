'use client';

import { Link, scrollSpy } from 'react-scroll'
import Image from "next/image";
import {useEffect} from "react";

export default function TsAndCsNav() {

    useEffect(() => {
        scrollSpy.update();
    });

    return(
        <nav className="nav flex-column sticky-top tsandcs-nav">
            <p className={"salmon-text ps-4"}>Jump to section</p>
            <Link
                className={"nav-link plain-link"}
                activeClass="active"
                to={"website-ts-and-cs"}
                spy={true}
                smooth={true}
            >
                <Image className={"me-3"} src={"/images/right-chevron.png"} alt={"arrow symbol"} width={10} height={16}></Image>
                Website
            </Link>
            <Link
                className={"nav-link plain-link"}
                activeClass="active"
                to={"privacy"}
                spy={true}
                smooth={true}
            >
                <Image className={"me-3"} src={"/images/right-chevron.png"} alt={"arrow symbol"} width={10} height={16}></Image>
                Privacy
            </Link>
            <Link
                className={"nav-link plain-link"}
                activeClass="active"
                to={"online-ordering"}
                spy={true}
                smooth={true}
            >
                <Image className={"me-3"} src={"/images/right-chevron.png"} alt={"arrow symbol"} width={10} height={16}></Image>
                Online Ordering
            </Link>
            <Link
                className={"nav-link plain-link"}
                activeClass="active"
                to={"promos"}
                spy={true}
                smooth={true}
            >
                <Image className={"me-3"} src={"/images/right-chevron.png"} alt={"arrow symbol"} width={10} height={16}></Image>
                Promotions
            </Link>

            <Link
                className={"nav-link plain-link"}
                activeClass="active"
                to={"comps"}
                spy={true}
                smooth={true}
            >
                <Image className={"me-3"} src={"/images/right-chevron.png"} alt={"arrow symbol"} width={10} height={16}></Image>
                Competitions
            </Link>
        </nav>
    );
};