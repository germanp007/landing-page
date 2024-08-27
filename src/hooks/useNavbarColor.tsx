import { useEffect } from "react";

const useNavbarColor = (
  sectionId: string,
  navId: string,
  navbarId: string,
  titleId: string
) => {
  useEffect(() => {
    const handleScroll = () => {
      const sectionHelp = document.getElementById(sectionId);
      const navLinks = document.getElementById(navId);
      const navbar = document.getElementById(navbarId);
      const titleLogo = document.getElementById(titleId);
      if (sectionHelp && navLinks && navbar) {
        const navbarHeight = navbar.offsetHeight / 2;
        const rect = sectionHelp.getBoundingClientRect();

        if (rect.top <= navbarHeight && rect.bottom >= navbarHeight) {
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
  }, [sectionId, navId, navbarId]);
};

export default useNavbarColor;
