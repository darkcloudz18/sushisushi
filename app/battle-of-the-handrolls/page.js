import '../styles/smackdown.scss';
import BattleArena from "./BattleArena";

export default function BattleOfTheHandrolls() {
    return(
        <div className={"container py-5"}>
            <h1>Battle of the Handrolls</h1>
            <BattleArena />
        </div>
    )
}