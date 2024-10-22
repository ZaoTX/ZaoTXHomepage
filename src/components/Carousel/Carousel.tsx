import  "./Carousel.css";
import {useState} from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
interface CarouselProps {
  imageurls: string[];
}

function Carousel({ imageurls }: CarouselProps) {
  const [curslide,setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(curslide == imageurls.length - 1 ? 0 : curslide + 1);
  };
  const prevSlide = () => {
    setSlide(curslide == 0 ? imageurls.length - 1 : curslide - 1);
  };
  return (
    <div className="carousel-container">
      <RiArrowLeftSLine className="arrow left" onClick={prevSlide}/>
      {/* Carousel Items */}
      {imageurls.map((image, index) => (
        <img
          className={
            curslide == index ? "carousel-item" : "carousel-item slide-hidden"
          }
          src={image}
          alt={`Slide ${index}`}
          key={index}
        />
      ))}
      <RiArrowRightSLine className="arrow right" onClick={nextSlide}/>
      <div className="indicators">
        {imageurls.map((_, index) => (
          <button
            key={index}
            className={
              curslide == index ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => {
              console.log("clicked");
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
