import '../styles/stores.scss';
import Title from '../components/Title';
import ContactForm from "../components/about/ContactForm";

export default function ContactUs() {
    return (
        <>
            <Title title="Contact Us" headerClass={"contact"} />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <h2 className="section-title-salmon">Send us a message</h2>
                        <p>We love to hear from our customers. Tell us about your latest experience using our contact form.</p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <div className={"salmon-bg"}>
                <div className={"container py-5"}>
                    <div className={"row"}>
                        <div className={"col-12 col-lg-6"}>
                            <h2 className="mt-5">Prefer to speak to someone?</h2>
                            <p>Contact our support office on:</p>
                            <p className="fs-2">(03) 8575 3888</p>
                            <p>Monday to Friday 9am – 5:00pm AEST (excludes public holidays)</p>
                        </div>
                        <div className={"col-12 col-lg-6"}>
                            <img src={"/images/contactus.png"} className={"img-fluid"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}