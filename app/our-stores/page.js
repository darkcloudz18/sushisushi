import '../styles/stores.scss';
import Map from '../components/stores/Map';
import Title from '../components/Title'
import StoreData from "../api/stores/stores";

export default function OurStores() {
  return (
    <>
      <Title title="Our Stores" headerClass={"stores"} />
      <Map storeData={StoreData} searchLabel={"Find your nearest Sushi Sushi"} />
    </>
  );
}
