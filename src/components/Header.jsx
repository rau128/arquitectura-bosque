import Navegacion from "./Navegacion";
import imagen from "../assets/hero.jpg";

const Header = () => {
  return (
    <header
      className={`flex flex-col items-center md:items-stretch md:justify-between md:container md:mx-auto fondo md:px-[50px] xl:px-[150px] pt-4 `}
    >
      <div className="flex flex-col md:flex-row  justify-between items-center">
        <div className="logo ">
          <h1 className="md:text-4xl xl:text-4xl text-white text-2xl">
            Acquitectura <span>Bosque</span>
          </h1>
        </div>

        <Navegacion />
      </div>

      <div className="mb-4">
        <h2 className="text-white md:text-3xl pb-1 text-2xl">
          Tu Casa En EL Bosque
        </h2>
        <p className="text-white ">Contruimos La Casa De Tu Sueños</p>
      </div>
    </header>
  );
};

export default Header;
