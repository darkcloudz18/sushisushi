'use client';

import '../styles/footer.scss';

export default function Footer() {

    return (
        <footer className="pt-5">
          <div className="container">
            <div className="row salmon-borders py-5">
              <div className="col-8 col-md-10">
                <div className="row row-cols-1 row-cols-md-3 py-5">
                  <div className="col py-3">
                    <a href='/' className="plain-link">Home</a>
                  </div>
                  <div className="col py-3">
                    <a href='https://sushisushi.orderup.com.au/' className="plain-link">Order now</a>
                  </div>
                  <div className="col py-3">
                    <a className="plain-link" href="https://franchise.sushisushi.com.au/">Franchising</a>
                  </div>
                  <div className="col py-3">
                    <a href={"/careers"} className={"plain-link"}>Careers</a>
                  </div>
                  <div className="col py-3">
                    <a href="/contact_us" className="plain-link">Contact us</a>
                  </div>
                  <div className="col py-3">
                    <a href='/terms_and_conditions' className="plain-link">Terms and conditions</a>
                  </div>
                </div>
              </div>
              <div className="col-4 col-md-2">
                <img src="/images/koi-pink.png" className="img-fluid" />
              </div>
            </div>
            <img src="/images/SushiSushi_Stacked.png" className="img-fluid mx-auto d-block py-5" />
            <p className="text-center">© 2023 Sushi Sushi.</p>
          </div>
        </footer>
    );
}