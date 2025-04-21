import "./CarouselItem.scss";

function CarouselItem(props) {

  return (
    <div
      key={`${props.item.uniqueKey}`}
      className={`carousel-card ${props.style}`}
      onClick={() => props.toggleDiv(props.item)}
    >
      <div className="carousel-card-content">
        <h3 className="carousel-card-content-title">{props.item.title}</h3>
        <p className="carousel-card-content-subtitle">{props.item.subtitle}</p>
      </div>
      <img src={props.item.img} alt="" />
    </div>
  );
}

export default CarouselItem;
