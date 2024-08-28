import ResponsiveNav from "./components/navbar/ResponsiveNav";
import HelpYou from "./sections/HelpYou";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

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
    </div>
  );
};

export default App;
