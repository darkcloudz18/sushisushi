import {useState} from "react";

export default function BattleRing(){
    const [currentChampIndex, setCurrentChampIndex] = useState(0);
    const [currentContenderIndex, setCurrentContenderIndex] = useState(1);

    return(
        <div className={"battle-ring"}>

        </div>
    )
}