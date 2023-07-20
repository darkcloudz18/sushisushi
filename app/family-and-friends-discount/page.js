import '../styles/stores.scss';
import Title from "../components/Title";
import Map from "../components/stores/Map";
import StoreData from "../api/stores/stores";

export default function FriendsAndFamily(){
    const participatingStores = StoreData.filter((store) => {return store.company})
    return(

        <>
            <Title title="Family and Friends Discount" headerClass={"stores"} />
            <div className={"container"}>
                <p className={"lead text-center mt-5"}>Hey friend! Great to see you. Here&apos;s the list of stores where your discount applies. Roll on in...</p>
            </div>
            <Map storeData={participatingStores} searchLabel={"Find your nearest participating store"}/>
        </>

    );
}