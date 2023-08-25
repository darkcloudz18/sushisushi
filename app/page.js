import './styles/homepage.scss';
import Hero from './components/homepage/Hero'
import Categories from './components/homepage/Categories'
import Faves from './components/homepage/Faves'
import Join from './components/homepage/Join'
import Socials from "./components/homepage/Socials";
import SushiFan from './components/homepage/SushiFan'


export default function Home() {
    return (
        <>
            <Hero/>
            <Categories/>
            <Faves/>
            <Join/>
            <Socials/>
        </>
    );
}
