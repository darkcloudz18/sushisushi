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
                <p className={"lead text-center mt-5"}>Hey, what kinda party is this? There's no booze and only one hooker. I had more, but you go ahead. Bender! Ship! Stop bickering or I'm going to come back there and change your opinions manually! I'm just glad my fat, ugly mama isn't alive to see this day.</p>
            </div>
            <Map storeData={participatingStores} searchLabel={"Find your nearest participating store"}/>
        </>

    );
}