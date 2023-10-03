import {BattleStatus} from "./BattleArena";

export default function EntryForm({fields, handleFieldChange, setBattleStatus}){

    const fieldsAreFilled = function (){
      return  fields.FNAME && fields.LNAME && fields.EMAIL && fields.POSTCODE
    };

    return (
    
        <div className={"container"}>
            
        <div className={"row"}>
           
            <div className={"col-sm m-5"}>
            <h3 className={""}>Konnichiwa!</h3>
            <p className={"lead"}> History has delivered us some sushi champions. The Tuna and Avocado… the California… and the people’s hero, Crispy Chicken. Each one has graced us with their deliciousness, but only one can be crowned Australia’s favourite hand roll.</p>
            <p className={"lead"}>What’s your go to? Play our game and help us discover Australia’s most popular hand roll flavour. There’s over $8K worth of epic prizes including a flight voucher to get you to the land of sushi itself (Japan).</p>
            <p className={"lead"}>Talking of things to celebrate, we’re turning 25 and on Saturday 28 October we’re giving you the presents! Our top 6 favourite hand rolls will be $2.50 all day. Woohoo! (Don’t forget it). </p>
            
            </div>
            <div className={"col-sm mb-5 mt-5 "}>
                <img src="/images/battle/vote.png" className={"img-thumbnail"} alt="" />
            </div>
            
        </div>
        <h3 className={"text-center"}>Which hand roll is getting your vote?</h3>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    setBattleStatus(BattleStatus.InProgress);
                }}
            >
                <div className={"text-center"}> <button type="submit" className="btn btn-sushi-primary" style={{width: "80%"}}>Let&apos;s Roll</button></div>
            </form>
        </div>
    )
}