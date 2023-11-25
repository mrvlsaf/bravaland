'use client'
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { items } from "../../../public/CarouselItems.json";

export default function BannerComponent() {

  const { carouselItems } = items;

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}>
      {carouselItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img src={item.imageUrl} alt="slides" />
          <Carousel.Caption>
            <h3>{item.heading}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}