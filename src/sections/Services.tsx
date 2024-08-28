// import Card from "../components/card/Card";
// import { Titles } from "../components/generics/titles/Titles";

import Card from "../components/card/Card";
import { Titles } from "../components/generics/titles/Titles";

const Services = () => {
  return (
    <>
      <section className="bg-sectionBg h-[60vh] w-screen flex flex-col overflow-x-hidden space-y-4 py-4 justify-evenly ">
        <Titles className="text-white w-full text-center">
          Nuestros Servicios
        </Titles>
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-container gap-4 px-6">
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
      </section>
    </>
  );
};

export default Services;
