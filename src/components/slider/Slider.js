import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import Slides from "./Slides";
import "./Slider.css"
const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Projects</h2>
      </div>

      <Carousel
        plugins={[
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            },
          },
         
          'arrows',
          'infinite',
          'centered',
          'clickToChange'
        ]}
        animationSpeed={200}
        offset={50}
        itemWidth={400}
        slides={Slides}
      />
    </div>
  );
};

export default Slider;
