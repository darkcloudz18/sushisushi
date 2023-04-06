'use client';

export default function Join() {
    return (
        <div className="container-fluid p-5">
          <div className="join-us-card">
            <div className="row">
                <div className="col-12 order-lg-2 col-lg-8">
                  <div className="join-img d-none d-lg-block"></div>
                  <img className="img-fluid float-end d-lg-none" src='/images/join-sushi.png' alt="Join us image" />
                </div>
                <div className="col-12 col-lg-4 p-4">
                    <h2 className="fw-bold">Join Sushi Sushi today</h2>
                    <p >Join our mailing list! We promise we won&apos;t fill your inbox with fluffy white rice. We&apos;re all about quality over quantity.</p>
                    <form>
                        <div className="my-3">
                          <label htmlFor="inputFirstName" className="form-label">First name</label>
                          <input type="text" className="form-control" id="inputFirstName" />
                        </div>
                        <div className="my-3">
                          <label htmlFor="inputLastName" className="form-label">Last name</label>
                          <input type="text" className="form-control" id="inputLastName" />
                        </div>
                        <div className="my-3">
                          <label htmlFor="inputPostcode" className="form-label">Postcode</label>
                          <input type="text" className="form-control" id="inputPostcode" />
                        </div>
                        <div className="my-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                        </div>
                        <button type="submit" className="btn btn-sushi-primary">Submit details</button>
                    </form>
                </div>
            </div>
          </div>
        </div>
    );
}