'use client';
import {useState} from "react";
import validator from 'validator';
import ContactMailer from "../../api/mailer/ContactMailer";
import humanizeString from "humanize-string";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [dateOfVisit, setDateOfVisit] = useState("");
    const [visitLocation, setVisitLocation] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isFeedback, setFeedback] = useState(null);
    const onSubmit = function (){
        const subject = isFeedback ? "Feedback form submission" : "Contact form enquiry";
        const text = isFeedback ?
            "Date of Visit: " + dateOfVisit + ", Location of Visit: " + visitLocation + ", Message: " + message
            : message;
        ContactMailer().messages.create('mg.sushisushi.com.au', {
            from: `${name} <${email}>`,
            to: ["pascaledalkie@sushisushi.com.au"],
            subject: subject,
            text: text
        })
            .then(msg => {
                if (msg.status === 200) {
                    setIsSubmitted(true);
                } else {
                    throw new Error();
                }
            })
            .catch(err => setError("Something went wrong, please try again later"));
    };

    return(
        <div className={"py-5"}>
            <h3>What kind of form do you want to submit?</h3>
            <div className={"toggle-buttons mt-3 mb-5"}>
                <button type="button"
                        className={`btn ${isFeedback? "btn-sushi-primary" : "btn-sushi-secondary"}`}
                        aria-pressed={isFeedback}
                        onClick={(e) => setFeedback(true)}
                >
                    Feedback Form
                </button>
                <button type="button"
                        className={`btn ${isFeedback === false? "btn-sushi-primary" : "btn-sushi-secondary"}`}
                        aria-pressed={!isFeedback}
                        onClick={(e) => setFeedback(false)}
                >
                    General Enquiry Form
                </button>
            </div>
            <div className={`lead ${isSubmitted? "d-block" : "d-none"}`}>Thank you for your message. We will get back to you soon.</div>
            {isFeedback !== null && <div className={`${isSubmitted? "d-none" : "d-block"} salmon-card p-5`}>
                <h4 className={"fw-bold"}>{isFeedback? "Feedback Form": "General Enquiry"}</h4>
                <form
                    onSubmit={(event)=> {
                        event.preventDefault();
                        onSubmit();
                    }}
                >
                    <div className={`alert alert-danger ${error !== "" ? "d-block" : "d-none"}`} role="alert">{error}</div>
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fullName"
                            name="fullName"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            required={true}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="yourEmail" className="form-label">Your Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="yourEmail"
                            name="yourEmail"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required={true}
                        />
                    </div>
                    { isFeedback &&
                        <>
                            <div className={"mb-3"}>
                                <label htmlFor="dov" className="form-label">Date of Visit</label>
                                <input id={"dov"} className="d-block" type={"date"}
                                       onChange={(e) => {
                                           setDateOfVisit(e.target.value);
                                       }}
                                       required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="visitLocation" className="form-label">Store Location</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="visitLocation"
                                    onChange={(e) => {
                                        setVisitLocation(e.target.value);
                                    }}
                                    required={true}
                                />
                            </div>
                        </>
                    }
                    <div className="mb-3">
                        <label htmlFor="contactMessage" className="form-label">Your Message</label>
                        <textarea
                            className="form-control"
                            id="contactMessage"
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            required={true}
                        />
                    </div>
                    <button type="submit" className="btn btn-sushi-primary" >Submit</button>
                </form>
            </div> }
        </div>

    );
}