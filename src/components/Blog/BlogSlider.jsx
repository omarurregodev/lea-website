import { useState } from "react";
import "./BlogSlider.scss";

function BlogSlider({ list }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 2;

  const handleNext = () => {
    if (currentIndex + itemsToShow < list.length) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsToShow >= 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };

  const visibleItems = list.slice(currentIndex, currentIndex + itemsToShow);
  return (
    <>
      <div className="blog-content-slider">
        <div className="blog-content-slider-track" >
          {list.slice(currentIndex, currentIndex + itemsToShow).map((item) => (
            <div key={item.title} className={`blog-content-slider-track-item`}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <p>{item.date}</p>
              <p>{item.desc}</p>
              {item.cta && (
                <button>
                  <a href={item.link} target="_blank">Ver más...</a>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="blog-content-nav">
        <button
          className="leftArrow"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
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
        <button
          className="rightArrow"
          onClick={handleNext}
          disabled={currentIndex + itemsToShow >= list.length}
        >
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
    </>
  );
}

export default BlogSlider;
