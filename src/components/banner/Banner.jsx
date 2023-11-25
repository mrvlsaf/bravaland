import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem, CarouselCaption } from 'react-bootstrap';
// import img1 from "../../assets/img1.png";

function Banner() {
  return (
    <div>
      <Carousel fade>
        <CarouselItem>
          <img src="/img1.png" />
          {/* <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption> */}
        </CarouselItem>
        {/* <CarouselItem>
          <img src="/img2.png" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src="/img3.png" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src="/img4.png" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem>
        <CarouselItem>
          <img src="/img5.png" />
          <CarouselCaption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </CarouselCaption>
        </CarouselItem> */}
      </Carousel>
    </div>
  )
}

export default Banner