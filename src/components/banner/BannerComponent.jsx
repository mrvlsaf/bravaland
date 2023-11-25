'use client'
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./BannerComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "../../../public/CarouselItems.json";

export default function BannerComponent() {

  const { carouselItems } = items;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const splitTextIntoWords = (text) => {
    return text.split(' ').map((word, index) => (
      <div key={index} className="word">
        {word}
      </div>
    ));
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption>
            <div style={{ textAlign: `${item.position}`, top: `${item.top}`, left: `${item.left}` }} className="carousel-heading">
              {/* {item.heading} */}
              {splitTextIntoWords(item.heading)}
            </div>
            <div className="shop-button">shop now</div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}