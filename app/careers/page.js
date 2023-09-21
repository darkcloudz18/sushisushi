import Title from '../components/Title';
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Title title="Careers" headerClass={"careers"}/>
            <div className={"container py-5"}>
                <div className={"row row-cols-1 row-cols-lg-2"}>
                    <div className={"col"}>
                        <h2 className={"section-title-salmon"}>Want to be part of Australia’s largest and most loved sushi brand ?</h2>
                        <p className={"lead"}>With more than 150 locations across Australia and New Zealand, plus our Support Office in Victoria, there are plenty of opportunities available at Sushi Sushi.</p>
                    </div>
                    <div>
                        <img src={"/images/careers.png"} className={"img-fluid"}/>
                    </div>
                </div>
            </div>
            <div className={"row row-cols-1"}>
                <div className={"col order-0 order-md-1 salmon-bg"}>
                    <div className={"container my-5"}>
                        <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3 align-items-center justify-content-end"}>
                            <div className={"col"}>
                                <h2 className={"section-title-salmon"}>See what jobs we have available</h2>
                            </div>
                            <div className={"col"}>
                                <div className={"card p-5 mt-3"}>
                                    <span className={"visually-hidden"}>Sushi Sushi jobs on seek.com</span>
                                    <img src={"/images/seek-logo.png"} className={"img-fluid mb-5 p-4"}/>
                                    <a className={"btn btn-sushi-primary"} href={"https://www.seek.com.au/Sushi-Sushi-jobs/at-this-company"}>
                                        Jobs on Seek
                                    </a>
                                </div>
                            </div>
                            <div className={"col"}>
                                <div className={"card p-5 mt-3"}>
                                    <span className={"visually-hidden"}>Sushi Sushi jobs on indeed.com</span>
                                    <img src={"/images/Indeed_logo.png"} className={"img-fluid mb-5 p-4"}/>
                                    <a className={"btn btn-sushi-primary"} href={"https://www.seek.com.au/Sushi-Sushi-jobs/at-this-company"}>
                                        Jobs on Indeed
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"col order-1 order-md-0"}>
                    <div className={"container my-5"}>
                        <div className={"row row-cols-1 row-cols-md-2 row-cols-lg-3"}>
                            <div className={"col mt-3"}>
                                <div className={"salmon-card h-100 p-5"}>
                                    <h3 className={"gazpacho-text"}>Store Manager</h3>
                                    <p>Want opportunities for added responsibility and growth all while working in a fun, fast-paced and rewarding work environment?</p>
                                    <p>Try our store manager positions, and enhance your skills today.</p>
                                </div>
                            </div>
                            <div className={"col mt-3"}>
                                <div className={"salmon-card h-100 p-5"}>
                                    <h3 className={"gazpacho-text"}>Team Member</h3>
                                    <p>At Sushi Sushi, we pride ourselves on providing an amazing customer experience and a fun work culture.</p>
                                    <p>Our sushi Artisans gain transferable customer service and kitchen hand experience with plenty of opportunity for growth.</p>
                                </div>
                            </div>
                            <div className={"col mt-3"}>
                                <div className={"salmon-card h-100 p-5"}>
                                    <h3 className={"gazpacho-text"}>Support Office</h3>
                                    <p>Do you want a role with endless opportunity and a fun work environment? If so, then Support Office could be for you.</p>
                                    <p>The departments we have in our Support Office include: Interior Design, Marketing, Franchising Sales, Operations, Finance, IT, HR and Training.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
