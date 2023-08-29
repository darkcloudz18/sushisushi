import {useState} from "react";
import {SmackdownRolls} from "./SmackdownRolls";
import {BattleStatus} from "./BattleArena";

let currentContenderIndex = 1;
export default function BattleRing({setBattleStatus, setWinner}){
    const maxContenders = SmackdownRolls.length;
    const [contenderLeft, setContenderLeft] = useState(new Contender(SmackdownRolls[0]));
    const [contenderRight, setContenderRight] = useState(new Contender(SmackdownRolls[1]));

    const changeOutLoser = function (setLoser) {
        currentContenderIndex++;
      if (currentContenderIndex >= maxContenders) {
          setWinner(contenderLeft.isCurrentChamp? contenderLeft.rollName : contenderRight.rollName);
          setBattleStatus(BattleStatus.Finished);
      } else {
          setLoser(new Contender(SmackdownRolls[currentContenderIndex]));
      }
    };

    return(
        <div className={"battle-ring-container"}>
            <p className={"lead fw-bold text-center pb-3"}>Tap or click on the hand roll that you like best as the hand rolls go head to head to find your ultimate favourite</p>
            <h3>{contenderLeft.rollName}</h3>
            <div className={"battle-ring"}>
                <div
                    className={"left-contender"}
                    onClick={(event) => {
                        event.preventDefault();
                        contenderLeft.isCurrentChamp = true;
                        contenderRight.isCurrentChamp = false;
                        changeOutLoser(setContenderRight);
                    }}
                >
                    <img height={250} width={250} className={"left-sushi"} src={`/images/battle/contestants/${contenderLeft.rollName}.png`}/>
                </div>
                <div
                    className={"right-contender"}
                    onClick={(event) => {
                        event.preventDefault();
                        contenderLeft.isCurrentChamp = false;
                        contenderRight.isCurrentChamp = true;
                        changeOutLoser(setContenderLeft);
                    }}
                >
                    <img height={250} width={250} className={"right-sushi"} src={`/images/battle/contestants/${contenderRight.rollName}.png`}/>
                </div>
                <h2 className={"position-absolute top-50 start-50 translate-middle"}>VS</h2>
            </div>
            <h3 className={"text-end"}>{contenderRight.rollName}</h3>
        </div>
    )
}

class Contender {
    imgURL;
    rollName;
    isCurrentChamp = false;
    constructor(smackdownRoll) {
        this.imgURL = "http://placekitten.com/200/300";
        this.rollName = smackdownRoll.name;
    }

}
