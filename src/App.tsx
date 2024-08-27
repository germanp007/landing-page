import ResponsiveNav from "./components/navbar/ResponsiveNav";
import HelpYou from "./sections/HelpYou";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import {
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  icon_10,
  icon_11,
  icon_12,
  icon_13,
  icon_14,
  icon_15,
} from "./assets/icons";
const App = () => {
  return (
    <div
      className="bg-slate-500 w-screen min-h-screen 
    "
    >
      <ResponsiveNav />
      <Hero />
      <HelpYou />
      <Services />
      <div className="h-screen w-screen bg-white">
        <img src={icon_1} alt="" />
      </div>
    </div>
  );
};

export default App;
