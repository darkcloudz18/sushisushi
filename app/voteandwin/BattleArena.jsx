'use client';
import {useFormFields, useMailChimpForm} from "use-mailchimp-form";
import {useState} from "react";
import EntryForm from "./EntryForm";
import BattleRing from "./BattleRing";
import Popup from "./Popup";

export default function BattleArena() {
    const url = "https://sushisushi.us8.list-manage.com/subscribe/post?u=cb1737034ba02e71679c3f045&amp;id=dc7f569985&amp;f_id=00a1c2e1f0";
    const { loading, error, success, message, handleSubmit } = useMailChimpForm(
        url
    );
    const { fields, handleFieldChange } = useFormFields({
        EMAIL: "",
        FNAME: "",
        LNAME: "",
        POSTCODE: "",
        HRWINNER: ""
    });

    const [battleStatus, setBattleStatus] = useState(BattleStatus.NotStarted);
    const [winner, setWinner] = useState("");

    const [buttonPopup, setButtonPopup] = useState(false);

    return(
        <div className={"container py-5"}>

            { battleStatus === BattleStatus.NotStarted && <EntryForm fields={fields} handleCFieldChange={handleFieldChange} setBattleStatus={setBattleStatus}/> }   
            { battleStatus === BattleStatus.InProgress && <BattleRing setBattleStatus={setBattleStatus} setWinner={setWinner} />}
            { battleStatus === BattleStatus.Finished &&
                <>
                    <h3 className={"text-center"}>Drum roll… your #1 Hand Roll is: <b>{winner}</b></h3>
                    <div className={"end-screen m-5"}>
                        <img height={400} width={350} src={`/images/battle/contestants/${winner}.png`} className={"mx-auto"}/>
                    </div> 
                    <h4 className={"text-center"}>Think you can capture your sushi love in 25 words or less and win?</h4>
                    <div className="text-center">
                    <button className="btn btn-sushi-primary" style={{width: "50%"}} onClick={() => setButtonPopup(true)}>Lets Roll</button>
                    </div>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <form
                        className={"text-center"}
                        onSubmit={event => {
                            event.preventDefault();
                            fields.HRWINNER = winner;
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
                <div className="my-3">
                    <label htmlFor="POSTCODE" className="form-label">Postcode</label>
                    <input
                        id="POSTCODE"
                        className="form-control"
                        type="number"
                        value={fields.POSTCODE}
                        onChange={handleFieldChange}
                    />
                 </div> 
                        { !loading && !error && !success &&
                            <><button className={"btn btn-sushi-primary"} onClick={() => location.href = "./thankyou"}>Submit competition entry</button>
                            <p className={"fs-6 mt-4"}>By clicking on &quot;Submit competition entry&quot; you agree to the <a href={"/terms-and-conditions"}>ts&cs</a> of this competition</p></>
                        }

                    </form>
                    <div className="lead pt-3 text-center">
                {loading && "Submitting..."}
                {error && "Sorry something went wrong, please reload and try again"}
                {success && "Thank you for entering our competition!"}
            </div>
                    </Popup>
                </>
            }
            
        </div>
    )
}

export const BattleStatus = {
    NotStarted: "NotStarted",
    InProgress: "InProgress",
    Finished: "Finished"
}