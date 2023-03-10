'use client';

export default function Join() {
    return (
        <div className="container-fluid py-3">
            <div className="row">
                <div className="col">
                    <img src="https://gratisography.com/wp-content/uploads/2018/05/gratisography-434H-free-stock-photo-1170x780.jpg" class="img-thumbnail img-fluid" alt="Join us image" />
                </div>
                <div className="col">
                    <form>
                      <div className="mb-3">
                        <label for="inputEmail" className="form-label">Email address</label>
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