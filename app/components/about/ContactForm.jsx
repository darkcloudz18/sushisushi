'use client';
import {useState} from "react";
import validator from 'validator';
import ContactMailer from "../../api/mailer/ContactMailer";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const onFormChange = function (){
        setIsValid(validator.isEmail(email) && name !== "" && message !== "");
    };
    const onSubmit = function (event){
        ContactMailer().messages.create('mg.sushisushi.com.au', {
            from: `${name} <${email}>`,
            to: ["customerfeedback@sushisushi.com.au"],
            subject: "Contact form enquiry",
            text: message
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
        <>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    onSubmit();
                }}
                onChange={onFormChange}
                className={`${isSubmitted? "d-none" : "d-block"}`}
            >
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Your name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="yourEmail" className="form-label">Your email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="yourEmail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactMessage" className="form-label">Your message</label>
                    <input
                        type="textarea"
                        className="form-control"
                        id="contactMessage"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <div className={`alert alert-danger ${error !== "" ? "d-block" : "d-none"}`} role="alert">{error}</div>
                <button type="submit" className="btn btn-sushi-primary" disabled={!isValid}>Submit</button>
            </form>
            <div className={`lead ${isSubmitted? "d-block" : "d-none"}`}>Thank you for your message. We will get back to you soon.</div>
        </>

    );
}