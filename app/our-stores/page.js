import '../styles/stores.scss';
import Map from '../components/stores/Map';
import Title from '../components/Title'

export default function OurStores() {
  return (
    <>
      <Title title="Our Stores" headerClass={"stores"} />
      <Map />
    </>
  );
}
