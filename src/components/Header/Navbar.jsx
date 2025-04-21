import LogoLea from "../../assets/logo_navbar.svg";
import Calendario from "../../assets/calendario.pdf";

import "./Navbar.scss";

function Navbar({scrollToRef, usRef, coursesRef, blogRef, contactRef, isMobile, isTablet}) {
    return (
        <nav className="nav-desktop">
            <div className="logoSide">
                <img
                src={LogoLea}
                alt="LEA's logo"
                />
            </div>
            <div className="navSide">
                <div className="navSide_navBtn">
                    <ul>
                        <li><a onClick={() => scrollToRef(usRef)} href="us_section">Nosotros</a></li>
                        <li><a onClick={() => scrollToRef(coursesRef)} href="courses_section">Cursos</a></li>
                        <li><a href={Calendario} target="_blank">Calendario</a></li>
                        <li><a onClick={() => scrollToRef(blogRef)} href="blog_section">Anuncios</a></li>
                        <li><a onClick={() => scrollToRef(contactRef)} href="contact_section">Contacto</a></li>
                    </ul>
                </div>
                <div className="navSide_logBtn">
                    <button><a href="https://canvas.instructure.com/login/canvas">Log in</a></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;