import '../app/styles/globals.scss'
import '../app/styles/404.scss';

export default function Custom404() {
    return(
        <div className={"container py-5"}>
            <div className={"row"}>
                <div className={"col-12 col-lg-6 mb-3 py-3"}>
                    <div className={"lost-text"}>
                        <h1>Oh dear it seems you&apos;ve got lost</h1>
                        <blockquote className="blockquote">
                            <p>
                                猿も木から落ちる<br/>
                                Even monkeys fall from trees
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Japanese Proverb
                        </figcaption>
                        <p>Even the most experienced navigators get lost. Even the best web developers create broken links.</p>
                        <p>If you think there&apos;s been an error you can email <a href={"mailto:customerfeedback@sushisushi.com.au"}>customerfeedback@sushisushi.com.au</a></p>
                        <p>Otherwise spend some time at our koi pond and relax.</p>
                        <a href={"/"} className={"home-link"}>Return home</a>
                    </div>
                </div>
                <div className={"col-12 col-lg-6"}>
                    <div className={"koi-pond"}>
                        <div className={"koi-one"}></div>
                        <div className={"koi-two"}></div>
                        <div className={"koi-three"}></div>
                        <div className={"koi-four"}></div>
                        <div className={"koi-five"}></div>
                        <div className={"lilypad"}></div>
                        <div className={"lotus"}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}