import { useState, useEffect } from "react";
import LogoLea from "../../assets/logo_navbar.svg";
import Calendario from "../../assets/calendario.pdf";
import Horario from "../../assets/Horario.pdf";

import "./MobileNavbar.scss";

function MobileNavbar({
  scrollToRef,
  usRef,
  blogRef,
  coursesRef,
  contactRef,
  isMobile,
  isTablet,
}) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleClick = (ref) => {
    scrollToRef(ref);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav className={`nav-responsive`}>
      <div className="logoSide">
        <img src={LogoLea} alt="Logo de LEA" />
      </div>
      <div className="menuBurguer" onClick={toggleMenu}>
        <div className={`${isOpen ? "topLine open" : "topLine"}`}></div>
        <div className={`${isOpen ? "bottomLine open" : "bottomLine"}`}></div>
      </div>
      <div className={`navSide ${isOpen ? `show` : null}`}>
        <div className={`navSide_navBtn`}>
          <ul className={`navButtons ${isOpen ? `show` : 'visuallyhidden'}`}>
            <li>
              <a onClick={() => handleClick(usRef)} href="us_section" aria-label="scroll a Nosotros">
                Nosotros
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(coursesRef)} href="courses_section" aria-label="scroll a cursos">
                Cursos
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href={Calendario} target="_blank" aria-label="redirige a Calendario">
                Calendario
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(blogRef)} href="blog_section" aria-label="scroll a novedades">
                Novedades
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(contactRef)} href="contact_section" aria-label="scroll a contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className={`navSide_logBtn ${isOpen ? `show` : 'visuallyhidden'}`}>
          <button aria-label="direcciona a horario">
            <a href={Horario} target="_blank" aria-label="redirige a Horario">Horario 25/26</a>
          </button>
        </div>
        <div className={`navSide_logo ${isOpen ? `show` : 'visuallyhidden'}`}>
        <img src={LogoLea} alt="Logo de LEA" />
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
