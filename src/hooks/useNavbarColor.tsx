import { useEffect } from "react";

const useNavbarColor = (sectionId: string, navId: string, navbarId: string) => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionHelp = document.getElementById(sectionId);
      const navLinks = document.getElementById(navId);
      const navbar = document.getElementById(navbarId);

      if (sectionHelp && navLinks && navbar) {
        const navbarHeight = navbar.offsetHeight / 2;
        const rect = sectionHelp.getBoundingClientRect();
        // const windowHeight =
        //   window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
          // Si la sección está cerca de la mitad de la pantalla
          navLinks.classList.remove("text-white");
          navLinks.classList.add("text-primary");
        } else {
          navLinks.classList.remove("text-primary");
          navLinks.classList.add("text-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionId, navId, navbarId]);
};

export default useNavbarColor;
