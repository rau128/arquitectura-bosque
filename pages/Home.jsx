import Header from "../src/components/Header";
import Modelo from "../src/components/Modelo";
import SobreNosotros from "../src/components/SobreNosotros";

const Home = () => {
  return (
    <div>
      <Header />
      <SobreNosotros />
      <h2 className="text-center  text-2xl">Conoce Nuestro Modelos</h2>
      <Modelo titulo={"Modelo Basico"} clase={"basica"} />
      <Modelo titulo={"Modelo Premier"} clase={"premier"} />
      <Modelo titulo={"Modelo Elite"} clase={"elite"} />
    </div>
  );
};

export default Home;
