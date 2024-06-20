import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#a8d5ba'}}>
          <div className="carousel-caption">
            <h3>Інноваційна навчальна лабораторія</h3>
            <p>Знайомтеся з передовими технологіями та методиками навчання в нашій сучасній лабораторії!</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#a8d5ba'}}>
          <div className="carousel-caption">
            <h3>Практичні заняття та дослідження</h3>
            <p>Відкрийте для себе світ наукових досліджень та практичних знань в умовах реального часу.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#a8d5ba'}}>
          <div className="carousel-caption">
            <h3>Професійний розвиток</h3>
            <p>Отримайте унікальні навички та знання, необхідні для вашого професійного зростання та успіху.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
