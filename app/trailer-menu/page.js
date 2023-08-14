import '../styles/menu.scss';
import Title from "../components/Title";
import ProductStub from "./productstub";
import MenuSection from "../components/menu/MenuSection";

export default function TrailerMenu() {
    const categoryList = [
        "HandRolls",
        "Packs",
        "Deluxe",
        "Salads"
    ];
    return(
        <>
            <Title title={"Trailer Menu"} headerClass={"menu"}></Title>
            <MenuSection products={ProductStub} categoryList={categoryList}/>
        </>
    )
}