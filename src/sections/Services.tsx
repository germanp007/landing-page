import Card from "../components/card/Card";
import { Titles } from "../components/generics/titles/Titles";

const Services = () => {
  return (
    <>
      <section className="bg-sectionBg h-[60vh] flex flex-col justify-evenly items-center ">
        <Titles className="text-white w-full text-center">
          Nuestros Servicios
        </Titles>
        <div className="w-screen flex justify-center items-center overflow-x-auto space-x-4 snap-x snap-mandatory px-6 scroll-container">
          <div className="flex gap-8">
            <div className="snap-center shrink-0">
              <Card />
            </div>
            <div className="snap-center shrink-0">
              <Card />
            </div>
            <div className="snap-center shrink-0">
              <Card />
            </div>
            <div className="snap-center shrink-0">
              <Card />
            </div>
            <div className="snap-center shrink-0">
              <Card />
            </div>
            <div className="snap-center shrink-0">
              <Card />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
