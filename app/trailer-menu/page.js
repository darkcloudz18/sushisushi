import '../styles/menu.scss';
import Title from "../components/Title";
import ProductStub from "./productstub";
import MenuSection from "../components/menu/MenuSection";

export default function TrailerMenu() {
    const FILTER_MAP = {
        HandRolls: (item) => item.category == "hand_rolls" && item.group.includes("White Rice"),
        BrownRice: (item) => item.category == "hand_rolls" && item.group.includes("Brown Rice"),
        Packs: (item) => item.category == "packs",
        Platters: (item) => item.category == "platters",
        Deluxe: (item) => item.category == "deluxe",
        Salads: (item) => item.category == "salads",
        HotFood: (item) => item.category == "hot_food"
    };
    return(
        <>
            <Title title={"Trailer Menu"} headerClass={"menu"}></Title>
            <MenuSection products={ProductStub} filter_map={FILTER_MAP}/>
        </>
    )
}