import ResponsiveNav from "./components/navbar/ResponsiveNav";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div
      className="bg-slate-500 w-screen min-h-screen 
    "
    >
      <ResponsiveNav />
      <Hero />
      <div className="w-screen h-[1040px] bg-green-700" id="tecnologias"></div>
      <div className="w-screen h-[1040px] bg-blue-700" id="contactanos"></div>
    </div>
  );
};

export default App;
