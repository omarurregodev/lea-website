import LogoLea from "../../assets/logo_navbar.svg";
import Calendario from "../../assets/calendario.pdf";
import Horario from "../../assets/Horario.pdf";

import "./Navbar.scss";

function Navbar({scrollToRef, usRef, coursesRef, blogRef, contactRef, isMobile, isTablet}) {
    return (
        <nav className="nav-desktop">
            <div className="logoSide">
                <img
                src={LogoLea}
                alt="Logo de LEA"
                />
            </div>
            <div className="navSide">
                <div className="navSide_navBtn">
                    <ul>
                        <li><a onClick={() => scrollToRef(usRef)} href="us_section" aria-label="scroll a Nosotros">Nosotros</a></li>
                        <li><a onClick={() => scrollToRef(coursesRef)} href="courses_section" aria-label="scroll a cursos">Cursos</a></li>
                        <li><a href={Calendario} target="_blank" aria-label="redirige a Calendario">Calendario</a></li>
                        <li><a onClick={() => scrollToRef(blogRef)} href="blog_section" aria-label="scroll a novedades">Novedades</a></li>
                        <li><a onClick={() => scrollToRef(contactRef)} href="contact_section" aria-label="scroll a contacto">Contacto</a></li>
                    </ul>
                </div>
                <div className="navSide_logBtn">
                    <button aria-label="direcciona a horario"><a href={Horario} target="_blank" aria-label="redirige a Horario">Horario 25/26</a></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;