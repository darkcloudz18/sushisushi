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

    return(
        <div className={"container py-5"}>

            { battleStatus === BattleStatus.NotStarted && <EntryForm fields={fields} handleFieldChange={handleFieldChange} setBattleStatus={setBattleStatus}/> }
            { battleStatus === BattleStatus.InProgress && <BattleRing />}
            <div className="lead pt-3">
                {loading && "Submitting..."}
                {error && message}
                {success && message}
            </div>
        </div>
    )
}

export const BattleStatus = {
    NotStarted: "NotStarted",
    InProgress: "InProgress",
    Finished: "Finished"
}