//
import { useEffect } from "react";

const useNavbarColor = (
  sectionIds: string[],
  navId: string,
  navbarId: string,
  titleId: string
) => {
  useEffect(() => {
    const handleScroll = () => {
      const navLinks = document.getElementById(navId);
      const navbar = document.getElementById(navbarId);
      const titleLogo = document.getElementById(titleId);
      let isInSection = false;

      if (navLinks && navbar) {
        const navbarHeight = navbar.offsetHeight / 2;

        // Iterar sobre las secciones
        sectionIds.forEach((sectionId) => {
          const section = document.getElementById(sectionId);
          if (section) {
            const rect = section.getBoundingClientRect();

            if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
              isInSection = true;
            }
          }
        });

        // Cambiar los colores del navbar y el logo según si estamos en una sección
        if (isInSection) {
          navLinks.classList.remove("text-white");
          navLinks.classList.add("text-primary");
          titleLogo?.classList.remove("text-white");
          titleLogo?.classList.add("text-primary");
        } else {
          navLinks.classList.remove("text-primary");
          navLinks.classList.add("text-white");
          titleLogo?.classList.remove("text-primary");
          titleLogo?.classList.add("text-white");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, navId, navbarId, titleId]);
};

export default useNavbarColor;
