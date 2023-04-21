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
                    Home
                  </div>
                  <div className="col py-3">
                    Order now
                  </div>
                  <div className="col py-3">
                    Delivery
                  </div>
                  <div className="col py-3">
                    Franchising
                  </div>
                  <div className="col py-3">
                    Careers
                  </div>
                  <div className="col py-3">
                    Contact
                  </div>
                  <div className="col py-3">
                    Terms and conditions
                  </div>
                  <div className="col py-3">
                    Tool box
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