'use client';
import {useState, useEffect} from "react";
import {SmackdownRolls} from "./SmackdownRolls";
import {BattleStatus} from "./BattleArena";
import InfoPopup from "./InfoPopup";

let currentContenderIndex = 1;
export default function BattleRing({setBattleStatus, setWinner}){
    const maxContenders = SmackdownRolls.length;
    const [contenderLeft, setContenderLeft] = useState(new Contender(SmackdownRolls[0]));
    const [contenderRight, setContenderRight] = useState(new Contender(SmackdownRolls[1]));
    const [timeInfoPopup, setTimeInfoPopup] = useState(false);
    const [timeInfoPopupTwo, setTimeInfoPopupTwo] = useState(false);
    const [timeInfoPopupThree, setTimeInfoPopupThree] = useState(false);
    const [timeInfoPopupFour, setTimeInfoPopupFour] = useState(false);
    const [timeInfoPopupFive, setTimeInfoPopupFive] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleProgressClick = () => {
        if (progress < 100 ) {
            setProgress(progress + 7)
        }
    };

    useEffect (() => {
        setTimeout (() => {
            setTimeInfoPopup(true);
        }, 3000);
        setTimeout (() => {
            setTimeInfoPopupTwo(true);
        }, 7500);
        setTimeout (() => {
            setTimeInfoPopupThree(true);
        }, 11500);
        setTimeout (() => {
            setTimeInfoPopupFour(true);
        }, 15500);
        setTimeout (() => {
            setTimeInfoPopupFive(true);
        }, 19500);

        setTimeout (() => {
            setTimeInfoPopup(false);
        }, 5500);
        setTimeout (() => {
            setTimeInfoPopupTwo(false);
        }, 9500);
        setTimeout (() => {
            setTimeInfoPopupThree(false);
        }, 13500);
        setTimeout (() => {
            setTimeInfoPopupFour(false);
        }, 17500);
        setTimeout (() => {
            setTimeInfoPopupFive(false);
        }, 21500);
    }, []);   

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
        
            
            <p className={"text-center"}><img className={"text-center"} height={"250"} width={"800"} src="/images/battle/banner.png" alt="Battle of the Hand Rolls" /></p>
            <p className={"lead fw-bold display-6 text-center m-0 p-0"}> It&apos;s Sushi v Sushi!</p>
            <p className={"lead text-center display-6 m-0 p-0"}>Select your fave from the 2 hand roll contenders and watch the others get knocked out of the battle until there is just one champion! </p>
            {/* <h3 className={"visible-text"}>{contenderLeft.rollName}</h3> */}
            <div className={"battle-ring"}>
                <div
                    className={"left-contender"}
                    onClick={(event) => {
                        event.preventDefault();
                        contenderLeft.isCurrentChamp = true;
                        contenderRight.isCurrentChamp = false;
                        changeOutLoser(setContenderRight);
                        handleProgressClick();
                    }}
                >
                    <img height={350} width={300} className={"left-sushi"} src={`/images/battle/contestants/${contenderLeft.rollName}.png`}/>
                </div>
                <div
                    className={"right-contender"}
                    onClick={(event) => {
                        event.preventDefault();
                        contenderLeft.isCurrentChamp = false;
                        contenderRight.isCurrentChamp = true;
                        changeOutLoser(setContenderLeft);
                        handleProgressClick();
                    }}
                >
                    <img height={350} width={300} className={"right-sushi"} src={`/images/battle/contestants/${contenderRight.rollName}.png`}/>
                    {/* <span className={""}>{contenderRight.rollName}</span> */}
                    
                </div>
                
                <h2 className={"text-circle"}>VS</h2>
                
            </div>
            
            {/* <h3 className={"visible-text"}>{contenderRight.rollName}</h3> */}
                
            <div>
            
            <div className={"container d-flex justify-content-center text-center"}>
                    <div className={"progress-container"}>
                    <div className={"progress-bar text-center"}>
                        <div className={"progress-bar-fill text-center"} style={{width: `${progress}%`}}><p>Rolls Left : {15 - (progress / 7)}</p></div>
                    </div>    
                    </div>
                    </div>
            <InfoPopup trigger={timeInfoPopup} setTrigger={setTimeInfoPopup}>
                <h3>Nice Pick!</h3>
                <p className={"lead p-3"}>Just like our nori seaweed! We only pick the first crop harvested each winter in Japan. It&apos;s rare to find in Australia. Unless you are a world-class sushi maker… or one of our customers (lucky you hey!)</p>
            </InfoPopup>
            <InfoPopup trigger={timeInfoPopupTwo} setTrigger={setTimeInfoPopupTwo}>
                <h3>Quality choice!</h3>
                <p className={"lead p-3"}>Quality is important to us too! Over 25 years we’ve stayed true to our belief that quality matters. We proudly source Japanese ingredients for authenticity and local produce for freshness,   supporting local farmers, producers and suppliers.</p>
            </InfoPopup>
            <InfoPopup trigger={timeInfoPopupThree} setTrigger={setTimeInfoPopupThree}>
                <h3>You’re playing a strong game!</h3>
                <p className={"lead p-3"}>Speaking of strong game, our soy sauce is traditional Japanese soy sauce. We’re talking about an exclusive-supplier-founded-in-18th-century-Japan traditional. But, somehow, also modern. Because it’s gluten free.</p>
            </InfoPopup>
            <InfoPopup trigger={timeInfoPopupFour} setTrigger={setTimeInfoPopupFour}>
                <h3>On a roll.</h3>
                <p className={"lead p-3"}>Nearly there.</p>
            </InfoPopup>
            <InfoPopup trigger={timeInfoPopupFive} setTrigger={setTimeInfoPopupFive}>
                <h3>Tasty selection!</h3>
                <p className={"lead p-3"}>You&apos;ve got a taste for the best, just like our stores who use over 1 million kilos of rice each year. Keep rolling with those excellent decisions!</p>
            </InfoPopup>
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
