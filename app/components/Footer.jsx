'use client';

import '../styles/footer.scss';
import React from "react";

export default function Footer() {

    return (
        <footer className="pt-5">
          <div className={"light-grey-bg my-5"}>
            <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-lg-3 text-center">
                <img src="/images/footer-logo.png" className="img-fluid footer-logo" />
              </div>
              <div className="col-12 col-lg-3 fw-bold text-center">
                <hr className={"d-lg-none mb-5"}/>
                <a className="" href="https://www.facebook.com/SushiSushiAUS">
                  <img className="" src="/images/fb.png" />
                </a>
                <a className="ms-2" href="http://instagram.com/sushisushiaus">
                  <img className="" src="/images/insta.png" />
                </a>
                <a className="ms-2" href="https://au.linkedin.com/company/sushi-sushi">
                  <img className="" src="/images/linkedin.png" />
                </a>
                <hr className={"d-lg-none mt-5"}/>
              </div>
              <div className="col-12 col-lg-6">
                <div className="row row-cols-1 row-cols-md-3 px-5 footer-links">
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
            </div>
          </div>
          </div>
          <p className="text-center">© 2023 Sushi Sushi.</p>
        </footer>
    );
}