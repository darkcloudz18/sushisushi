import FormData from "form-data";
import Mailgun from "mailgun.js";

export default function ContactMailer() {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: 'api',
        key: process.env.mailer_api_key
    });
    return(mg);
}