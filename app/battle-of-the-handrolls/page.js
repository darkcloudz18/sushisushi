import '../styles/smackdown.scss';
import BattleArena from "./BattleArena";

export default function BattleOfTheHandrolls() {
    return(
        <div className={"container py-5"}>
            <h1 className={"text-center"}>Battle of the Hand Rolls</h1>
            <BattleArena />
        </div>
    )
}