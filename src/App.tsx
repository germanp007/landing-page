import { Footer } from "./components/footer/Footer";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import Contact from "./sections/Contact";
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
      <Contact />
      <Footer />
    </>
  );
};

export default App;
