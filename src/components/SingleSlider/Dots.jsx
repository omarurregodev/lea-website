import "./Dots.scss";

function Dots({activeIndex, onclick, sliderContent}) {
    
    return(
        <ul>
            {sliderContent.map((slide, index) => (
                <li key={index} className={`${activeIndex === index ? "dot active" : "dot"}`} onClick={() => onclick(index)}></li>
            ))}
        </ul>
    )
}

export default Dots;