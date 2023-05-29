'use client';
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

export default function Join() {
    const url = "https://sushisushi.us8.list-manage.com/subscribe/post?u=cb1737034ba02e71679c3f045&amp;id=12a68c4f06&amp;f_id=00b1c2e1f0";
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(
        url
    );
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: "",
        FNMAE: "",
        LNAME: ""
    });
    return (
        <div className="container-fluid p-5">
          <div className="salmon-card p-3">
            <div className="row">
                <div className="col-12 order-lg-2 col-lg-8">
                  <div className="join-img d-none d-lg-block"></div>
                  <img className="img-fluid float-end d-lg-none" src='/images/join-sushi.png' alt="Join us image" />
                </div>
                <div className="col-12 col-lg-4 p-4">
                    <h2 className="fw-bold">Join our mailing list!</h2>
                    <p>We promise we won&apos;t fill your inbox with fluffy white rice. We&apos;re all about quality over quantity.</p>
                    <form
                        onSubmit={event => {
                            event.preventDefault();
                            handleSubmit(fields);
                        }}
                    >
                        <div className="my-3">
                            <label htmlFor="FNAME" className="form-label">First name</label>
                            <input
                                id="FNAME"
                                className="form-control"
                                type="text"
                                value={fields.FNAME}
                                onChange={handleFieldChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="LNAME" className="form-label">Last name</label>
                            <input
                                id="LNAME"
                                className="form-control"
                                type="text"
                                value={fields.LNAME}
                                onChange={handleFieldChange}
                            />
                        </div>
                        <div className="my-3">
                            <label htmlFor="EMAIL" className="form-label">Email address</label>
                            <input
                                id="EMAIL"
                                className="form-control"
                                type="email"
                                value={fields.EMAIL}
                                onChange={handleFieldChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-sushi-primary">Submit details</button>
                    </form>
                    <div className="lead pt-3">
                        {loading && "Submitting..."}
                        {error && message}
                        {success && message}
                    </div>
                </div>
            </div>
          </div>
        </div>
    );
}