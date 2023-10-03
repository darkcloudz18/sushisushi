import '../styles/smackdown.scss';
import BattleArena from "./BattleArena";
import BattleRing from './BattleRing';

export default function BattleOfTheHandrolls() {
    return(
        <>
           <div className={"title-background"}>
            <h1>It’s our 25 birthday. Vote and win!</h1>
           </div>
            <BattleArena />
        </>
        
    )
}