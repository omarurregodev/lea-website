import { useEffect, useState } from "react";
import testimonials from "../../db/testimonials";
import "./Testimonials.scss";
import { useInView, animated } from "@react-spring/web";

import line from "../../assets/line.svg";

const lenSlider = testimonials.length - 1;

function Testimonials({ isMobile, isTablet }) {
  const [animatePP, setAnimatePP] = useState(false);
  const [svgpathVisible, setSvgspathVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === lenSlider ? 0 : activeIndex + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  // Animation

  const [ref, inView] = useInView(
    () => ({
      from: {
        opacity: 0,
        y: 100,
      },
      to: {
        opacity: 1,
        y: 0,
      },
      onStart: () => setAnimatePP(true),
    }),
    {
      rootMargin: "-40% 0%",
      once: true,
    }
  );

  // Close Animation

  useEffect(() => {
    let timer;
    if (animatePP) {
      timer = setTimeout(() => {
        setSvgspathVisible(true);
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [animatePP]);

  return (
    <>
      <animated.section ref={ref} style={inView} className="testimonials">
        {isMobile && (
          <div className="testimonials-title">
            <h2 className="subtitle">
              Testimonios
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
            </h2>
          </div>
        )}
        <img src={line} alt="" />
        <div className="testimonials-track">
          {testimonials.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  index === activeIndex ? "item active" : "item visuallyhidden"
                }
              >
                <h4>{`${item.text}`}</h4>
                <p>{`- ${item.name}, ${item.city}, ${item.year}`}</p>
              </div>
            );
          })}
        </div>
      </animated.section>
    </>
  );
}

export default Testimonials;
