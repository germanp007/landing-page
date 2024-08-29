// import Card from "../components/card/Card";
// import { Titles } from "../components/generics/titles/Titles";

import Card from "../components/card/Card";
import { Titles } from "../components/generics/titles/Titles";
import { SERVICES_DATA } from "../utils/constants";

const Services = () => {
  return (
    <>
      <section className="bg-sectionBg h-[60vh] w-screen flex flex-col overflow-x-hidden space-y-4 py-4 justify-evenly sm700:h-[80vh] md:h-screen">
        <Titles className="text-white w-full text-center h-auto">
          Nuestros Servicios
        </Titles>
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-container gap-4 px-6">
          {SERVICES_DATA.map((ele) => (
            <div className="snap-center shrink-0" key={ele.id}>
              <Card element={ele} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
