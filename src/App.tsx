import ResponsiveNav from "./components/navbar/ResponsiveNav";
import HelpYou from "./sections/HelpYou";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div
      className="bg-slate-500 w-screen min-h-screen 
    "
    >
      <ResponsiveNav />
      <Hero />
      <HelpYou />
      <div className="w-screen h-[1040px] bg-blue-700" id="contactanos"></div>
    </div>
  );
};

export default App;
