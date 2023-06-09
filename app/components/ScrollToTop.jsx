import {animateScroll as scroll} from "react-scroll";
import Image from "next/image";

export default function ScrollToTop() {
    return(
        <a
            href={""}
            className={"lead text-center d-block"}
            onClick={() => scroll.scrollToTop()}
        >
            <Image src={"/images/uparrow.png"} alt={"up arrow symbol"} width={18} height={21}></Image> Scroll back to top
        </a>
    );
}