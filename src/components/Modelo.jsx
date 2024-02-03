import BotonModelos from "./BotonModelos";

const Modelo = ({ titulo, clase }) => {
  return (
    <main className={`container mx-auto xl:w-[62%] ${clase}`}>
      <h2 className="md:text-2xl text-[15px] mb-2">{titulo}</h2>

      <p className="text-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero
        similique possimus, hic qui deleniti cum exercitationem iure quas, esse
        voluptate. Dignissimos mollitia asperiores, quas ullam hic tenetur sit
        reprehenderit!
      </p>

      <BotonModelos />
    </main>
  );
};

export default Modelo;
