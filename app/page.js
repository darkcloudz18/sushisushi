import './styles/homepage.scss';
import Hero from './components/homepage/Hero'
import Faves from './components/homepage/Faves'
import Join from './components/homepage/Join'
import SushiFan from './components/homepage/SushiFan'


export default function Home() {
  return (
    <>
      <Hero />
      <Faves />
      <Join />
      <SushiFan />
    </>
  );
}
