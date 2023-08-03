'use client';

export default function Hero() {
    return (
        <div className="hero-container">
                <div className="row">
                    <div className="col-md-6 my-5 pb-md-2 px-5 px-md-0">
                        <img className={"img-fluid d-block d-md-none"} alt={"All new salads and inari range"} src={"/images/hero/heading-mobile.png"}/>
                        <img className={"img-fluid d-none d-md-block"} alt={"All new salads and inari range"} src={"/images/hero/heading-desktop.png"}/>
                        <p className="subtitle my-3">Send your taste buds on a trip with our new Japanese&nbsp;salads</p>
                        <a href="/our-stores" className="btn btn-sushi-primary">Find your nearest store</a>
                    </div>
            </div>
        </div>
    );
}