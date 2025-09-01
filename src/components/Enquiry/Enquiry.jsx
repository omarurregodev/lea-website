import { useState, useEffect } from "react";
import EnquiryForm from "./EnquiryForm";
import { useInView, animated } from "@react-spring/web";

import "./Enquiry.scss";
import IllustrationDesktop from "../../assets/desktop_img.webp";
import IllustrationMobile from "../../assets/mobile_img.webp";

function Enquiry({ scrollToRef, contactRef, isTablet, isMobile }) {
  // Animation
  const [animatePP, setAnimatePP] = useState(false);

  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
      onStart: () => setAnimatePP(true),
    }),
    {
      rootMargin: "-40% 0%",
      once: true,
    }
  );

  const [svgpathVisible, setSvgspathVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (animatePP) {
      timer = setTimeout(() => {
        setSvgspathVisible(true);
      }, 500);
    }
    return () => clearTimeout(timer);
  }, [animatePP]);

  // Close Animation
  return (
    <>
      <section ref={contactRef} id="contact_section" className="enquiry">
        {!isMobile && !isTablet ? (
          <svg
            className={`animated-svg ${svgpathVisible ? "animate" : ""}`}
            width="94"
            height="658"
            viewBox="0 0 94 658"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="1"
          >
            <path
               d="M44.5 0V287.676C44.5 290.483 47.3159 292.417 49.9359 291.409L87.5027 276.961C90.8265 275.682 94.0382 279.058 92.5959 282.314L65.3763 343.764C64.3875 345.996 61.6472 346.83 59.583 345.526L39.1303 332.609C36.9945 331.26 34.1585 332.204 33.2575 334.564L29.2262 345.122C27.8133 348.822 22.458 348.438 21.5872 344.574L17.0036 324.235C16.6916 322.85 15.6695 321.735 14.3176 321.303L4.195 318.073C0.557332 316.912 0.459406 311.8 4.04994 310.501L40.1388 297.44C42.7465 296.496 45.5 298.428 45.5 301.202V657.5"
              stroke="#DC5326"
              className="svg-path"
            />
          </svg>
        ) : null}
        {!isMobile && !isTablet ? (
          <animated.div ref={ref} style={inView} className="enquiry-form">
            <h2 className="title">Contáctanos</h2>
            <EnquiryForm />
          </animated.div>
        ) : (
          <div ref={ref} className="enquiry-form">
            <h2 className="title">Contáctanos</h2>
            <EnquiryForm />
          </div>
        )}

        {!isMobile ? (
          <animated.div
            ref={ref}
            style={inView}
            className="enquiry-illustration-desktop"
          >
            <img src={IllustrationDesktop} alt="Ilustración de LEA, personas interactuando y estudiando idiomas como: francés, inglés y español." />
          </animated.div>
        ) : (
          <animated.div
            ref={ref}
            style={inView}
            className="enquiry-illustration-mobile"
          >
            <img src={IllustrationMobile} alt="Ilustración de LEA, personas interactuando y estudiando idiomas como: francés, inglés y español." />
          </animated.div>
        )}
      </section>
    </>
  );
}

export default Enquiry;
