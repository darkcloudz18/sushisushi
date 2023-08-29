import '../styles/smackdown.scss';
import BattleArena from "./BattleArena";

export default function BattleOfTheHandrolls() {
    return(
        <div
            className={"salmon-bg"}
            style={{minHeight: '100vh'}}
        >
            <h1 className={"text-center pt-5"}>Battle of the Hand Rolls</h1>
            <div className={"pb-5"}> <BattleArena /> </div>
        </div>
    )
}