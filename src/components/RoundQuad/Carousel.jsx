import CarouselItem from "./CarouselItem";
import productsList from "../../db/products";
import "./Carousel.scss";

function Carousel({ toggleDiv }) {

  const duplicatedItems = [...productsList, ...productsList].map((item, index) => ({
    ...item,
    uniqueKey: `${item.id}-${index}`, 
  }));
  
  return (
    <>
      <div className="prods-carousel">
        <div className="prods-carousel-track">
          {duplicatedItems.map((item, index) => {
            return (
              <CarouselItem
                key={item.uniqueKey}
                index={index}
                item={item}
                style={index % 2 === 0 ? "up" : "down"}
                toggleDiv={toggleDiv}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Carousel;
