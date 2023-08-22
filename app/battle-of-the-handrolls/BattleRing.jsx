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
                <p>{contenderLeft.rollName}</p>
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
                <p>{contenderRight.rollName}</p>
            </div>
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
