import React, { useState } from 'react';
import "../style/Carousel.css";
// import IMAGES from './Data.js';



function Carousel({ images }) {
  const counter = images.length - 1;
  const [current, setCurrent] = useState(0);

  const slideRight = () => {
    const newCurrent = current + 1;
    setCurrent(newCurrent < counter + 1 ? newCurrent : 0);
  };

  const slideLeft = () => {
    const newCurrent = current - 1;
    setCurrent(newCurrent < 0 ? counter : newCurrent);
  };

  return (
    <div className="carousel">
      {/* {IMAGES && IMAGES.map((item) =>
        <div key={item.id}>
          <img className='img' src={item.path} alt={item.title} />
        </div>
      )
      } */}
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            <div key={index} className={index == current ? "carousel_card carousel_card-active" : "carousel_card"}>
              <img className="img" src={image.path} alt={image.title} />
              <div className="card_overlay">
                <h2 className="card_title">{index + 1}/{counter+1} - {image.title}</h2>
              </div>
            </div>
          );  
        })}
        <div className="carousel_arrow_left" onClick={slideLeft}>&lsaquo;</div>
        <div className="carousel_arrow_right" onClick={slideRight}>&rsaquo;</div>
        <div className="carousel_pagination">
          {/* {images.map((_, index) => {
            return (
              <div key={index} className={index == current ? "pagination_dot pagination_dot-active" : "pagination_dot"}></div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default Carousel