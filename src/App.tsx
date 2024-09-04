import { Footer } from "./components/footer/Footer";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import HelpYou from "./sections/HelpYou";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <>
      <ResponsiveNav />
      <Hero />
      <HelpYou />
      <Services />
      <Footer />
    </>
  );
};

export default App;
