import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomeCover from '../Images/HomeBackground.jpeg';
import FirstSlide from '../Images/firstSlide.jpeg';
import ThirdSlide from '../Images/secondSlide.jpeg';

export default function Home() {
  return (
    <Carousel
      style={{
        width: '100%',
        height: '100%',
        infinite: true,
        autoplay: true,
      }}
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={FirstSlide}
          alt="First slide"
          style={{
            width: '100%',
            maxHeight: '600px',
          }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Painting is silent poetry, and poetry is a painting that speaks.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ThirdSlide}
          alt="Second slide"
          style={{
            width: '100%',
            maxHeight: '600px',
          }}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>
            Painting is silent poetry, and poetry is a painting that speaks.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HomeCover}
          alt="Third slide"
          style={{
            width: '100%',
            maxHeight: '600px',
          }}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Painting is silent poetry, and poetry is a painting that speaks.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
