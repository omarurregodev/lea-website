import VideoHero from "../../assets/hero.mp4";
import Heroimg from "../../assets/slide1.jpg";
import PaperPlane from "../../assets/paperplane.svg";
import { useState, useEffect } from "react";
import "./Hero.scss";

import { useInView, animated } from "@react-spring/web";

function Hero({ scrollToRef, contactRef, isTablet, isMobile }) {
  // Animation
  const [videoVisible, setVideoVisible] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [btnVisible, setBtnVisible] = useState(false);
  const [svgpathVisible, setSvgpathVisible] = useState(false);
  const [svgplaneVisible, setSvgplaneVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSvgpathVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSvgplaneVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBtnVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="videoBg">
          {!isMobile && !isTablet ? (
            <video
              className={`videoBg-video ${videoVisible ? "show" : ""}`}
              autoPlay
              muted
              loop
              id="myVideo"
            >
              <source src={VideoHero} type="video/mp4" />
            </video>
          ) : (
            <div className="hero-image">
              <img src={Heroimg} alt="" />
            </div>
          )}
        </div>
        <div className="hero_content">
          <div className="hero_content-copy">
            <h2
              className={`hero_content-copy-title ${
                titleVisible ? "show" : ""
              }`}
            >
              ¡Una nueva era en el aprendizaje de idiomas!
            </h2>
            <button
              className={`hero_content-copy-btn ${btnVisible ? "show" : ""}`}
            >
              <a
                onClick={() => scrollToRef(contactRef)}
                href="#contact_section"
              >
                Inscríbete
              </a>
            </button>
            {!isTablet && !isMobile ? (
              <div className="hero_content-copy-pp">
                <svg
                  className={`animated-svg-pp ${
                    svgpathVisible ? "animate" : ""
                  }`}
                  width="684"
                  height="335"
                  viewBox="0 0 684 335"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 317C47.6886 326.996 102.731 335.245 150.133 333.51C185.762 332.207 225.013 322.455 252.103 298.29C285.131 268.828 286.916 228.086 274.241 188.158C268.068 168.715 258.396 150.774 241.425 138.795C224.874 127.111 199.579 124.43 179.5 130.5C154.466 138.068 144.303 168.32 144.71 191.345C145.033 209.595 152.596 230.644 162.5 245.5C171.542 259.062 187 274 199 279.5C218 288.208 236.451 291.145 256.016 294.768C284.661 300.073 317.508 301.897 345.687 293.259C359.146 289.133 372.416 283.973 384.5 277C398.456 268.947 410.783 257.614 422.947 246.97C443.491 228.995 461.438 206.545 475.609 183.239C497.509 147.224 511.902 99.9102 494.617 59.466C486.061 39.4463 471.645 23.2668 451.5 14C434.131 6.01028 427.838 4.9418 409 2.44332C395.015 0.58843 369.833 2.2888 356.868 7.69835C323.956 21.4304 301.876 54.0925 299.678 89.2632C296.773 135.737 339.55 171.927 379.677 185.699C404.276 194.141 431.467 203.857 457.832 201.743C476.363 200.257 493.768 193.729 510.55 186.09C533.918 175.452 556.976 163.342 578.697 149.64C625.283 120.253 682.5 48.5 682.5 48.5"
                    stroke="#6EC1E4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="svg-path-pp"
                  />
                </svg>
                <svg
                  width="107"
                  height="89"
                  viewBox="0 0 107 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`animated-svg-plane ${
                    svgplaneVisible ? "animate" : ""
                  }`}
                >
                  <path
                    d="M34 84L28.5 51.5L3 44L104.5 2L73.5 76L44 59.5M44 59.5L104 3L28 52.5L33.5 84.5L44 59.5Z"
                    stroke="#6EC1E4"
                    strokeWidth="2"
                    className="svg-path-plane"
                  />
                </svg>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
