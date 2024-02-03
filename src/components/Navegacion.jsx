import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav className="flex flex-col">
      <Link to={"tel:222222222"}>01-800-000-000</Link>
      <div className="flex items-center flex-col md:flex-row gap-2">
        <Link to={"#"}>Incio</Link>
        <Link to={"#"}>Nosotros</Link>
        <Link to={"#"}>Modelos</Link>
        <Link to={"#"}>Galeria</Link>
        <Link to={"#"}>Contacto</Link>
      </div>
    </nav>
  );
};

export default Navegacion;
