import logoLea from "../../assets/logo_navbar.svg";
import maskPattern from "../../assets/mask-footer.svg";
import instaLogo from "../../assets/instaLogo.svg";
import fbLogo from "../../assets/facebook.svg";

import "./Footer.scss";

function Footer({ scrollToRef, blogRef, isTablet, isMobile }) {
  const phoneNumber = "+34668551899";
  const messageContact = encodeURIComponent(
    "Hola, estoy interesado en el idioma "
  );
  const messageWorkWithUs = encodeURIComponent(
    "Hola, estoy interesado trabajar con ustedes."
  );
  const whatsappLinkContact = `https://wa.me/${phoneNumber}?text=${messageContact}`;
  const whatsappLinkWorkWithUs = `https://wa.me/${phoneNumber}?text=${messageWorkWithUs}`;

  return (
    <>
      {!isMobile && !isTablet ? (
        <section className="footer">
          <div className="footer-top">
            <div className="footer-top-logo">
              <img src={logoLea} alt="Logo de LEA" />
            </div>
            <div className="footer-top-info">
              <h3>Contacto</h3>
              <p>Language Experience Academy</p>
              <p>Pl. Palacio de Gorraiz, 7, 31620</p>
              <p>Gorráiz, Navarra</p>
              <p>España</p>
              <br />
              <p>
                <a href="mailto:contacto@teamlea.com" aria-label="permite enviar un correo electronico a contacto@teamlea.com">contacto@teamlea.com</a>
              </p>
              <p>T: 668 551 899 - 948 35 77 24</p>
              <br />
              <div className="socialIcons">
                <a href="https://www.instagram.com/lea.idiomas/profilecard/?igsh=YnplYzM2a25qcXVt" target="_blank" aria-label="redirige al perfil de instagram de LEA">
                  <img src={instaLogo} alt="instagram logo" />
                </a>
                <a href="https://www.facebook.com/people/LEA-Language-Experience-Academy/61565087736644/" target="_blank" aria-label="redirige al perfil de facebook de LEA">
                  <img src={fbLogo} alt="facebook logo" />
                </a>
              </div>
            </div>
            <div className="footer-top-links">
              <h3>Enlaces</h3>
              <p>
                <a onClick={() => scrollToRef(blogRef)} href="blog_section" aria-label="scroll a Novedades">
                  Novedades
                </a>
              </p>
              <br />
              <p>
                <a
                  href={whatsappLinkContact}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contacto
                </a>
              </p>
              <br />
              <p>
                <a
                  href={whatsappLinkWorkWithUs}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trabaja con Nosotros
                </a>
              </p>
              <br />
            </div>
          </div>
        </section>
      ) : (
        <section className="footer">
          <div className="footer-top">
            <div className="footer-top-logo">
              <img src={logoLea} alt="Logo de LEA" />
            </div>
            <div className="footer-top-info">
              <h3>Contacto</h3>
              <p>Language Experience Academy</p>
              <p>Pl. Palacio de Gorraiz, 7, 31620</p>
              <p>Gorráiz, Navarra</p>
              <p>España</p>
              <br />
              <p>
                <a href="mailto:contacto@teamlea.com" aria-label="permite enviar un correo electronico a contacto@teamlea.com">contacto@teamlea.com</a>
              </p>
              <p>T: 668 551 899 - 948 35 77 24</p>
              <br />
              <div className="socialIcons">
                <a href="https://www.instagram.com/lea.idiomas/profilecard/?igsh=YnplYzM2a25qcXVt" target="_blank" aria-label="redirige al perfil de instagram de LEA">
                  <img src={instaLogo} alt="instagram logo" />
                </a>
                <a href="https://www.facebook.com/people/LEA-Language-Experience-Academy/61565087736644/" target="_blank" aria-label="redirige al perfil de facebook de LEA">
                  <img src={fbLogo} alt="facebook logo" />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className="footer-bottom">
        <img src={maskPattern} alt="Patro de forma" />
        <p>
          © 2025 | LEA, All rights reserved. Designed and developed by{" "}
          <a target="_blank" href="https://www.omarurrego.com" aria-label="redirige al website del desarrollador Qoretech (Omar Urrego)">
            QoreTech
          </a>
          .
        </p>
      </div>
    </>
  );
}

export default Footer;
