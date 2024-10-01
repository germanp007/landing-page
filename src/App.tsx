import { I18nextProvider } from "react-i18next";
import { Footer } from "./components/footer/Footer";
import ResponsiveNav from "./components/navbar/ResponsiveNav";
import Contact from "./sections/Contact";
import HelpYou from "./sections/HelpYou";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import i18n from "./locales/i18n";

const App = () => {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <ResponsiveNav />
        <Hero />
        <HelpYou />
        <Services />
        <Contact />
        <Footer />
      </I18nextProvider>
    </>
  );
};

export default App;
