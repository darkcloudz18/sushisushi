'use client';

import '../styles/footer.scss';
import React from "react";

export default function Footer() {

    return (
        <footer className="pt-5">
          <div className="container">
            <div className="row salmon-borders py-5">
              <div className="col-8 col-md-10">
                <div className="row row-cols-1 row-cols-md-3 py-5">
                  <div className="col py-3">
                    <a href='/' className="plain-link fw-bold">Home</a>
                  </div>
                  <div className="col py-3">
                    <a href='https://sushisushi.orderup.com.au/' className="plain-link fw-bold">Order Now</a>
                  </div>
                  <div className="col py-3">
                    <a className="plain-link fw-bold" href="https://franchise.sushisushi.com.au/">Franchising</a>
                  </div>
                  <div className="col py-3">
                    <a href={"/careers"} className={"plain-link fw-bold"}>Careers</a>
                  </div>
                  <div className="col py-3">
                    <a href="/contact_us" className="plain-link fw-bold">Contact Us</a>
                  </div>
                  <div className="col py-3">
                    <a href='/terms_and_conditions' className="plain-link fw-bold">Terms and Conditions</a>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2">
                <img src="/images/koi-pink.png" className="img-fluid" />
              </div>
              <div className="fs-3 fw-bold">
                <a className="" href="https://www.facebook.com/SushiSushiAUS">
                  <img className="social-icon" src="/images/fb.png" />
                </a>
                <a className="ms-2" href="http://instagram.com/sushisushiaus">
                  <img className="social-icon" src="/images/insta.png" />
                </a>
                <a className="ms-2" href="https://au.linkedin.com/company/sushi-sushi">
                  <img className="social-icon" src="/images/linkedin.png" />
                </a>
              </div>
            </div>
            <img src="/images/SushiSushi_Stacked.png" className="img-fluid mx-auto d-block py-5" />
            <p className="text-center">© 2023 Sushi Sushi.</p>
          </div>
        </footer>
    );
}