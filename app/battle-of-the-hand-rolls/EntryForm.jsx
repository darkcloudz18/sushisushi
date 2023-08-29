import {BattleStatus} from "./BattleArena";

export default function EntryForm({fields, handleFieldChange, setBattleStatus}){
    return (
        <div className={"row justify-content-center"}>
        <div className={"col-12 col-md-4"}>
            <p className={"lead"}>16 hand rolls will enter the arena but only one will be crowned your favourite</p>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    setBattleStatus(BattleStatus.InProgress);
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
                <div className={"text-center"}> <button type="submit" className="btn btn-sushi-primary">Get ready to rumble</button></div>
            </form>
        </div>
        </div>
    )
}