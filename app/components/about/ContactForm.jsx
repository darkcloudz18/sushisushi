'use client';
import {useState} from "react";
import validator from 'validator';
import ContactMailer from "../../api/mailer/ContactMailer";

export default function ContactForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isValid, setIsValid] = useState(false);

    const onFormChange = function (){
        setIsValid(validator.isEmail(email) && name !== "" && message !== "");
    };
    const onSubmit = function (event){
        ContactMailer().messages.create('mg.sushisushi.com.au', {
            from: `${name} <${email}>`,
            to: ["pascaledalkie@sushisushi.com.au"],
            subject: "Contact form enquiry",
            text: message
        })
            .then(msg => console.log(msg)) // logs response data
            .catch(err => console.error(err));
    };

    return(
        <form
            onSubmit={event => {
            event.preventDefault();
            onSubmit();
            }}
            onChange={onFormChange}
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
            <button type="submit" className="btn btn-sushi-primary" disabled={!isValid}>Submit</button>
        </form>
    );
}