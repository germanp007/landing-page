// import Card from "../components/card/Card";
// import { Titles } from "../components/generics/titles/Titles";

import { useTranslation } from "react-i18next";
import Card from "../components/card/Card";
import { Titles } from "../components/generics/titles/Titles";
import { SERVICES_DATA } from "../utils/constants";

const Services = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-sectionBg w-screen flex flex-col overflow-x-hidden space-y-4 py-4 justify-evenly sm700:min-h-[80vh] ">
        <Titles className="text-white w-full text-center h-auto">
          {t("services.title")}
        </Titles>
        <div className="flex overflow-x-auto space-x-4 snap-x snap-mandatory scroll-container gap-4 px-6 lg:grid lg:grid-cols-2 lg:min-h-full lg:m-auto lg:gap-8">
          {SERVICES_DATA.map((ele) => (
            <div className="snap-center shrink-0 m-auto" key={ele.id}>
              <Card element={ele} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
