import Title from '../components/Title';
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Title title="Careers" />
            <div className={"container py-5"}>
                <h2 className={"section-title-salmon"}>Want to be part of Australia’s largest and most loved sushi brand?</h2>
                <p className={"lead"}>With more than 140 locations across Australia and New Zealand, plus our Support Office in Victoria, there are plenty of opportunities available at Sushi Sushi.</p>
                <h3>Store Manager</h3>
                <p>Want opportunities for added responsibility and growth all while working in a fun, fast-paced and rewarding work environment? Try our store manager positions, and enhance your skills today.</p>
                <h3>Team Member</h3>
                <p>At Sushi Sushi, we pride ourselves on providing an amazing customer experience and a fun work culture. Our sushi Artisans gain transferable customer service and kitchen hand experience with plenty of opportunity for growth.</p>
                <h3>Support Office</h3>
                <p>Do you want a role with endless opportunity and a fun work environment? If so, then Support Office could be for you. The departments we have in our Support Office include: Interior Design, Marketing, Franchising Sales, Operations, Finance, IT, HR and Training.</p>
                <h2 className={"mb-4"}>View available Sushi Sushi jobs</h2>

                <div className="row justify-content-start">
                    <div className="col-6 col-md-4 col-lg-2">
                        <a href={"https://www.seek.com.au/Sushi-Sushi-jobs/at-this-company"}>
                            <span className={"visually-hidden"}>Sushi Sushi jobs on seek.com</span>
                            <img src={"/images/seek-logo.png"} className={"img-fluid"}/>
                        </a>
                    </div>
                    <div className="col-6 col-md-4 col-lg-2 offset-md-1">
                        <a href={"https://www.seek.com.au/Sushi-Sushi-jobs/at-this-company"}>
                            <span className={"visually-hidden"}>Sushi Sushi jobs on indeed.com</span>
                            <img src={"/images/indeed_logo.png"} className={"img-fluid"}/>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
}