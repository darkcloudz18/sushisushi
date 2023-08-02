'use client';

export default function Hero() {
    return (
        <div className="hero-container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-5 pb-lg-2 px-5 px-lg-0">
                        <img className={"img-fluid d-block d-lg-none"} alt={"All new salads and inari range"} src={"/images/hero/heading-mobile.png"}/>
                        <img className={"img-fluid d-none d-lg-block"} alt={"All new salads and inari range"} src={"/images/hero/heading-desktop.png"}/>
                        <p className="subtitle my-3">Send your taste buds on a trip with our new Japanese salads</p>
                        <a href="/our-stores" className="btn btn-lg btn-light">Find your nearest store</a>
                    </div>
                </div>
            </div>
        </div>
    );
}