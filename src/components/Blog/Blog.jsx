import { useEffect, useState } from "react";
import blogList from "../../db/blog";
import PrimaryEntry from "./PrimaryEntry";
import BlogSlider from "./BlogSlider";
import { useInView, animated } from "@react-spring/web";
import externalIcon from "../../assets/external_link.svg";

import "./Blog.scss";

function Blog({ scrollToRef, blogRef, isTablet, isMobile }) {
  const [modifyList, setModifyList] = useState([]);
  const [headItem, setHeadItem] = useState(null);

  useEffect(() => {
    const headItem = blogList[0];
    const updateItemList = blogList.slice(1);

    setModifyList(updateItemList);
    setHeadItem(headItem);
  }, []);

  // Animation
  const [animatePP, setAnimatePP] = useState(false);

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

  // Slider mobile

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + blogList.length) % blogList.length
    );
  };

  return (
    <>
      <section ref={blogRef} id="blog_section" className="blog">
        <animated.div ref={ref} style={inView} className="blog-head">
          <h2 className="subtitle">
            Novedades LEA
            <span>
              <svg
                className={`animated-svg ${svgpathVisible ? "animate" : ""}`}
                width="94"
                height="73"
                viewBox="0 0 94 73"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M87.5027 0.960512L44.5 17.5L3.20841 34.3373C-0.253303 35.7489 -0.0588851 40.7152 3.50258 41.8519L14.3176 45.3035C15.6695 45.735 16.6916 46.8504 17.0036 48.2348L21.5872 68.5744C22.458 72.4385 27.8133 72.8223 29.2262 69.1219L33.2575 58.5638C34.1585 56.2038 36.9945 55.2597 39.1303 56.6086L59.583 69.5261C61.6472 70.8298 64.3875 69.9963 65.3763 67.7642L92.5959 6.31389C94.0382 3.05781 90.8265 -0.31789 87.5027 0.960512Z"
                  stroke="#DC5326"
                  className="svg-path"
                  strokeWidth="1.5px"
                />
              </svg>
            </span>
          </h2>
          <p>Descubre los próximos cursos, nuevos servicios y toda la información clave para seguir avanzando en tu aprendizaje. Stay tuned!</p>
        </animated.div>

        {!isMobile && !isTablet ? (
          <div className="blog-content">
            {headItem && <PrimaryEntry item={headItem} />}
            {modifyList && <BlogSlider list={modifyList} />}
          </div>
        ) : (
          <div className="blog-content_mobile">
            <div className="blog-content_mobile-slider">
              {blogList.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`blog-content_mobile-slider_slide ${
                    index === currentIndex ? "active" : "hidden"
                  }`}
                >
                  <img src={slide.img} alt={slide.alt} />
                  <h3>{slide.title}</h3>
                  <p>{slide.date}</p>
                  <p>{slide.desc}</p>
                  {slide.cta && (
                    <button aria-label="descarga">
                      <a href={slide.link} target="_blank" aria-label="descarga de contenido"><img src={externalIcon} alt="icono de external link" /></a>
                    </button>
                  )}
                </div>
              ))}
              <div className="blog-content_mobile-slider_nav">
                <button className="navleftArrow" onClick={handlePrev} aria-label="flecha izquierda">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                  >
                    <path
                      d="M9.31152 0.670898C5.98174 2.33726 2.64902 5.66997 0.985596 8.99976C2.64902 12.3295 5.98174 15.6623 9.31152 17.3286"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#d9d9d9"
                    />
                  </svg>
                </button>
                <button className="navrightArrow" onClick={handleNext} aria-label="flecha derecha">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                  >
                    <path
                      d="M9.31152 0.670898C5.98174 2.33726 2.64902 5.66997 0.985596 8.99976C2.64902 12.3295 5.98174 15.6623 9.31152 17.3286"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke="#d9d9d9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default Blog;
