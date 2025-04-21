import { useState, useEffect } from "react";
import LogoLea from "../../assets/logo_navbar.svg";
import Calendario from "../../assets/calendario.pdf";

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
        <img src={LogoLea} alt="LEA's logo" />
      </div>
      <div className="menuBurguer" onClick={toggleMenu}>
        <div className={`${isOpen ? "topLine open" : "topLine"}`}></div>
        <div className={`${isOpen ? "bottomLine open" : "bottomLine"}`}></div>
      </div>
      <div className={`navSide ${isOpen ? `show` : null}`}>
        <div className={`navSide_navBtn`}>
          <ul className={`navButtons ${isOpen ? `show` : 'visuallyhidden'}`}>
            <li>
              <a onClick={() => handleClick(usRef)} href="us_section">
                Nosotros
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(coursesRef)} href="courses_section">
                Cursos
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(false)} href={Calendario} target="_blank">
                Calendario
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(blogRef)} href="blog_section">
                Anuncios
              </a>
            </li>
            <li>
              <a onClick={() => handleClick(contactRef)} href="contact_section">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <div className={`navSide_logBtn ${isOpen ? `show` : 'visuallyhidden'}`}>
          <button>
            <a href="https://canvas.instructure.com/login/canvas">Log in</a>
          </button>
        </div>
        <div className={`navSide_logo ${isOpen ? `show` : 'visuallyhidden'}`}>
        <img src={LogoLea} alt="LEA's logo" />
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;
