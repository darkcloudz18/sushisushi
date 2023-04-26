import '../styles/stores.scss';
import Title from '../components/Title';
import ContactForm from "../components/about/ContactForm";

export default function ContactUs() {
    return (
        <>
            <Title title="Contact Us" />
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}