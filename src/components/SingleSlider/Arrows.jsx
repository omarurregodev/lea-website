import "./Arrows.scss";

function Arrows({prevSlide, nextSlide}) {
  return (
    <>
      <button className="leftArrow" onClick={prevSlide} aria-label="flecha izquierda">
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
      <button className="rightArrow" onClick={nextSlide} aria-label="flecha derecha">
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
    </>
  );
}

export default Arrows;
