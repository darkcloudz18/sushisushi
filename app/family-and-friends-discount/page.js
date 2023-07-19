import '../styles/stores.scss';
import Title from "../components/Title";
import Map from "../components/stores/Map";
import StoreData from "../api/stores/stores";

export default function FriendsAndFamily(){
    const participatingStores = StoreData.filter((store) => {return store.company})
    return(

        <>
            <Title title="Family and Friends Discount" headerClass={"stores"} />
            <Map storeData={participatingStores} searchLabel={"Find your nearest participating store"}/>
        </>

    );
}