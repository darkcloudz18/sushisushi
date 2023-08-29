'use client';
import {useFormFields, useMailChimpForm} from "use-mailchimp-form";
import {useState} from "react";
import EntryForm from "./EntryForm";
import BattleRing from "./BattleRing";

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

    return(
        <div className={"container py-5"}>

            { battleStatus === BattleStatus.NotStarted && <EntryForm fields={fields} handleFieldChange={handleFieldChange} setBattleStatus={setBattleStatus}/> }
            { battleStatus === BattleStatus.InProgress && <BattleRing setBattleStatus={setBattleStatus} setWinner={setWinner} />}
            { battleStatus === BattleStatus.Finished &&
                <>
                    <h3 className={"text-center"}>Your champion hand roll is <b>{winner}</b></h3>
                    <div className={"end-screen"}>
                        <img height={350} width={350} src={`/images/battle/contestants/${winner}.png`} className={"mx-auto"}/>
                    </div>
                    <form
                        className={"text-center"}
                        onSubmit={event => {
                            event.preventDefault();
                            fields.HRWINNER = winner;
                            handleSubmit(fields);
                        }}
                    >
                        { !loading && !error && !success &&
                            <><button className={"btn btn-sushi-primary"}>Submit competition entry</button>
                            <p className={"fs-6 mt-4"}>By clicking on &quot;Submit competition entry&quot; you agree to the <a href={"/terms-and-conditions"}>ts&cs</a> of this competition</p></>
                        }

                    </form>
                </>
            }
            <div className="lead pt-3 text-center">
                {loading && "Submitting..."}
                {error && "Sorry something went wrong, please reload and try again"}
                {success && "Thank you for entering our competition!"}
            </div>
        </div>
    )
}

export const BattleStatus = {
    NotStarted: "NotStarted",
    InProgress: "InProgress",
    Finished: "Finished"
}