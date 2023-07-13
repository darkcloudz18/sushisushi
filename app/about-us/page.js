import Title from '../components/Title';
import ArtOfSushi from "../components/about/ArtOfSushi";
import AuthenticJapan from "../components/about/AuthenticJapan";
import BromleyArt from "../components/about/BromleyArt";
import KoiStory from "../components/about/KoiStory";
import ArtOfSushiSushi from "../components/about/ArtOfSushiSushi";
import TakeawayArt from "../components/about/TakeawayArt";
import Hawksburn from "../components/about/Hawksburn";

export default function AboutUs() {
    return (
        <>
            <Title title="About Us" headerClass={"aboutus"} />
            <ArtOfSushi />
            <AuthenticJapan/>
            <ArtOfSushiSushi/>
            <BromleyArt/>
            <TakeawayArt/>
            <KoiStory/>
            <Hawksburn/>
        </>
    );
}