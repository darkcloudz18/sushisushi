'use client';

export default function ContactForm() {
    return(
        <form>
            <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Your name</label>
                <input type="text" className="form-control" id="fullName" />
            </div>
            <div className="mb-3">
                <label htmlFor="yourEmail" className="form-label">Your email address</label>
                <input type="email" className="form-control" id="yourEmail" />
            </div>
            <div className="mb-3">
                <label htmlFor="contactMessage" className="form-label">Your message</label>
                <input type="textarea" className="form-control" id="contactMessage" />
            </div>
            <button type="submit" className="btn btn-sushi-primary">Submit</button>
        </form>
    );
}