import { useState, useEffect } from "react";
import Carousel from "./Carousel";
import Modal from "./Modal";
import "./RoundQuad.scss";
import { useInView, animated } from "@react-spring/web";
import Horario from "../../assets/Horario.pdf";

function RoundQuad({ scrollToRef, coursesRef, isTablet, isMobile }) {
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState();

  const toggleDiv = (index) => {
    if (index.title !== undefined) {
      setIndex(index);
    }
    setIsVisible(!isVisible);
  };

  // Animation
  const [animatePP, setAnimatePP] = useState(false);
  const [svgpathVisible, setSvgspathVisible] = useState(false);

  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: 100,
      },
      to: {
        opacity: 1,
        x: 0,
      },
      onStart: () => setAnimatePP(true),
    }),
    {
      rootMargin: "0% -20%",
      once: true,
    }
  );

  useEffect(() => {
    let timer;
    if (animatePP) {
      timer = setTimeout(() => {
        setSvgspathVisible(true);
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [animatePP]);

  // Close Animation

  const phoneNumber = "+34668551899";
  const message = encodeURIComponent("Hola, estoy interesado en el idioma ");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <>
      <section ref={coursesRef} id="courses_section" className="roundQuad">
        <div className="roundQuad-container">
          <animated.h2 ref={ref} style={inView} className="subtitle">
            Nuestros cursos
            <span>
              <svg
                className={`animated-svg ${svgpathVisible ? "animate" : ""}`}
                width="66"
                height="33"
                viewBox="0 0 66 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 30.4811C7.87562 31.9691 8.06916 31.9468 15.1254 31.6886C20.4292 31.4946 26.2722 30.0429 30.3047 26.4458C35.2213 22.06 35.487 15.9951 33.6002 10.0515C32.6813 7.15715 31.2415 4.48652 28.7152 2.70325C26.2514 0.964097 22.4859 0.5649 19.4971 1.46851C15.7705 2.59516 14.2576 7.09839 14.3182 10.5259C14.3663 13.2426 15.4922 16.376 16.9664 18.5874C18.3124 20.6063 20.6135 22.8299 22.3998 23.6486C25.2282 24.9449 27.9748 25.3822 30.8872 25.9215C35.1513 26.7111 40.0408 26.9827 44.2356 25.6968C46.2391 25.0826 48.2145 24.3144 50.0133 23.2765C52.0731 22.0879 53.8945 20.4193 55.6903 18.8467C55.7187 18.8219 55.7306 18.7832 55.7212 18.7466L54.5 14M54.5 14L51.7244 13.0748C51.6405 13.0468 51.6315 12.9318 51.7099 12.8911L64.7854 6.11129C64.8645 6.07026 64.9537 6.14544 64.9267 6.23038L61.5319 16.8997C61.5145 16.9543 61.4551 16.9832 61.4015 16.9631L57.5 15.5M54.5 14L63.8994 7.4204C63.9948 7.35366 64.108 7.47605 64.034 7.56589L57.5 15.5M54.5 14L55.9237 18.271C55.9518 18.3555 56.0681 18.3638 56.108 18.2841L57.5 15.5"
                  stroke="#CC5C35"
                  strokeLinecap="round"
                  className="svg-path"
                />
              </svg>
            </span>
          </animated.h2>
          <animated.p ref={ref} style={inView} className="parragraph">
            En LEA te preparamos para viajar, te entrenamos para certificarte,
            te ofrecemos refuerzo escolar o te acompañamos mientras aprendes a
            comunicarte y a entender el mundo en diferentes idiomas.
          </animated.p>
          {!isMobile ? <div className="prods-carousel-filter"></div> : null}
          {!isMobile ? (
            <Carousel toggleDiv={toggleDiv} />
          ) : (
            <div className="course_btn">
              <button className="course_btn-item" aria-label="direcciona al horario de cursos">
                <a className="cursos-link" href={Horario} target="_blank" aria-label="redirige a Horario">
                  Cursos
                </a>
              </button>
            </div>
          )}
          {!isMobile ? (
            <Modal
              toggleDiv={toggleDiv}
              isVisible={isVisible}
              index={index !== undefined ? index : undefined}
            />
          ) : null}
          <animated.div ref={ref} style={inView} className="moreInfo">
            {!isMobile ? (
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.37575 0.59536C7.40483 0.361614 7.74361 0.361614 7.77269 0.595359L8.39178 5.57178C8.41094 5.72582 8.59065 5.80026 8.71313 5.70489L12.6698 2.62379C12.8556 2.47907 13.0951 2.71862 12.9504 2.90447L9.86933 6.86109C9.77396 6.98357 9.8484 7.16328 10.0024 7.18244L14.9789 7.80153C15.2126 7.83061 15.2126 8.16939 14.9789 8.19847L10.0024 8.81756C9.8484 8.83672 9.77396 9.01643 9.86933 9.13891L12.9504 13.0955C13.0951 13.2814 12.8556 13.5209 12.6697 13.3762L8.71313 10.2951C8.59065 10.1997 8.41094 10.2742 8.39178 10.4282L7.77269 15.4046C7.74361 15.6384 7.40483 15.6384 7.37575 15.4046L6.75666 10.4282C6.7375 10.2742 6.55778 10.1997 6.43531 10.2951L2.47869 13.3762C2.29284 13.5209 2.05329 13.2814 2.19801 13.0955L5.27911 9.13891C5.37448 9.01643 5.30004 8.83672 5.146 8.81756L0.169578 8.19847C-0.0641676 8.16939 -0.0641677 7.83061 0.169578 7.80153L5.146 7.18244C5.30004 7.16328 5.37448 6.98356 5.27911 6.86109L2.19801 2.90447C2.05329 2.71862 2.29284 2.47907 2.47869 2.62379L6.43531 5.70489C6.55778 5.80026 6.7375 5.72582 6.75666 5.57178L7.37575 0.59536Z"
                    fill="#DC5326"
                  />
                </svg>
                <a href={Horario} target="_blank" aria-label="redirige a Horario">
                  {" "}
                  Horario de clases
                </a>
              </p>
            ) : null}
          </animated.div>
        </div>
      </section>
    </>
  );
}

export default RoundQuad;
