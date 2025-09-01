import { useState } from "react";
import CalendarIcon from "../../assets/calendarIcon.svg";

import "./Flipcard.scss";

function Flipcard({ data }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      key={data.id}
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="flip-card-front-filter"></div>
          <img
            src={data.img}
            alt="Ilustracion de producto relacionada con los idiomas inglés, francés o español"
          />
          <h3>{data.title}</h3>
          <p>{data.subtitle}</p>
        </div>
        <div className="flip-card-back">
          <ul className="flip-card-back-list">
            <li key={data.desc}>
              <p>{data.desc.desc}</p>
              {(data.desc.schedule.day.length > 0) ? (
                <img src={CalendarIcon} alt="Calendar icon SVG" />
              ) : null}
              <span className="day-line">{data.desc.schedule.day}</span>
              <span className="hour-line">{data.desc.schedule.time}</span>
              <span className="price-line">{data.desc.price}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Flipcard;
