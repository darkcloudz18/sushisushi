'use client';
import {useState} from "react";
import validator from 'validator';
import ContactMailer from "../../api/mailer/ContactMailer";
import humanizeString from "humanize-string";
import StoreData from "../../api/stores/stores";
import {ReactSearchAutocomplete} from "react-search-autocomplete";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [dateOfVisit, setDateOfVisit] = useState("");
    const [visitLocation, setVisitLocation] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [isFeedback, setFeedback] = useState(true);

    const storeList = StoreData.map((store) => (
        {id: store.title, name: `${store.suburb}, ${store.title} ${store.subtitle === undefined ? '' : store.subtitle}`}
    ));
    const onSubmit = function (){
        const subject = isFeedback ? "Feedback form submission" : "Contact form enquiry";
        const text = isFeedback ?
            "Date of Visit: " + dateOfVisit + ", Location of Visit: " + visitLocation + ", Message: " + message
            : message;
        ContactMailer().messages.create('mg.sushisushi.com.au', {
            from: `${name} <${email}>`,
            to: ["customerfeedback@sushisushi.com.au"],
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
            <div className={`lead salmon-card p-5 ${isSubmitted? "d-block" : "d-none"}`}>Thank you for your message. We will get back to you soon.</div>
            <div className={`${isSubmitted? "d-none" : "d-block"} salmon-card p-5`}>
                <h4 className={"fw-bold"}>{isFeedback? "Feedback Form": "General Enquiry"}</h4>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Message Type</label>
                    <select
                        className={"form-select"}
                        value={isFeedback}
                        onChange={(e) => {
                            setFeedback(!isFeedback)
                        }}
                    >
                        <option value={true}>Feedback Form</option>
                        <option value={false}>General Enquiry</option>
                    </select>
                </div>
                <form
                    onSubmit={(event)=> {
                        event.preventDefault();
                        onSubmit();
                    }}
                >
                    <div className={`alert alert-danger ${error !== "" ? "d-block" : "d-none"}`} role="alert">{error}</div>
                    { isFeedback &&
                        <>
                            <div className={"mb-3"}>
                                <label htmlFor="dov" className="form-label">Date of Visit (required)</label>
                                <input id={"dov"} className="form-control" type={"date"}
                                       onChange={(e) => {
                                           setDateOfVisit(e.target.value);
                                       }}
                                       required={true}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="visitLocation" className="form-label">Store Location (required)</label>
                                <ReactSearchAutocomplete
                                    items={storeList}
                                    id="visitLocation"
                                    className={"form-search"}
                                    placeholder="Store location"
                                    required={true}
                                    aria-labelledby={"locationHelpBlock"}
                                    onSelect={(item) => {
                                        setVisitLocation(item.name);
                                    }}
                                    styling={{
                                        borderRadius: 0,
                                        border: "none",
                                        boxShadow: "none"
                                    }}
                                />
                                <div id="locationHelpBlock" className="form-text">
                                    Start typing the suburb of the store for a list of possible locations
                                </div>
                            </div>
                        </>
                    }
                    <div className="mb-3">
                        <label htmlFor="fullName" className="form-label">Name (required)</label>
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
                        <label htmlFor="yourEmail" className="form-label">Email Address (required)</label>
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
                    <div className="mb-3">
                        <label htmlFor="contactMessage" className="form-label">Message (required)</label>
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
            </div>
        </div>

    );
}