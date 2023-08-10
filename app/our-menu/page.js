import '../styles/menu.scss';
import Title from '../components/Title';
import MenuSection from '../components/menu/MenuSection'
import ProductStub from '../api/menu/productstub'

export default function OurMenu() {
  return (
    <>
      <Title title="Our Menu" headerClass={"menu"} />
      <MenuSection products={ProductStub}/>
    </>
  );
}
