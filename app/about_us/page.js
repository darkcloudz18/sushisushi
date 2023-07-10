import Title from '../components/Title';
import ArtOfSushi from "../components/about/ArtOfSushi";
import AuthenticJapan from "../components/about/AuthenticJapan";
import BromleyArt from "../components/about/BromleyArt";

export default function AboutUs() {
    return (
        <>
            <Title title="About Us" headerClass={"aboutus"} />
            <ArtOfSushi />
            <AuthenticJapan/>
            <BromleyArt/>
        </>
    );
}