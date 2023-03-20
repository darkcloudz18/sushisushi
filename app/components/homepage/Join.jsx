'use client';

export default function Join() {
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-lg-6">
                    <img src="https://gratisography.com/wp-content/uploads/2018/05/gratisography-434H-free-stock-photo-1170x780.jpg" className="img-thumbnail img-fluid" alt="Join us image" />
                </div>
                <div className="col-lg-6">
                    <h2 className="section-title">Join Sushi Sushi today</h2>
                    <p className="lead">Join our mailing list! We promise we won&apos;t fill your inbox with fluffy white rice. We&apos;re all about quality over quantity.</p>
                    <form>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <label htmlFor="inputFirstName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="inputFirstName" />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="inputLastName" className="form-label">First name</label>
                                <input type="text" className="form-control" id="inputLastName" />
                            </div>
                        </div>
                        <div className="my-3">
                            <label htmlFor="inputEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Join Us</button>
                    </form>
                </div>
            </div>
        </div>
    );
}