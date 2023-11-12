
import React, { useState } from 'react';
import dataSlider from './dataSlider';
import BtnSlider from './BtnSlider';


export default function Slider() {
  const [index, setIndex] = useState(1);

  const nextSlide = () => {
    if (index !== dataSlider.length) {
      setIndex(index + 1);
    } else if (index === dataSlider.length) {
      setIndex(1);
    }
  };

  const prevSlide = () => {
    if (index !== 1) {
      setIndex(index - 1);
    } else if (index === 1) {
      setIndex(dataSlider.length);
    }
  };

  return (
    <div className="container-slider">
      {dataSlider.map((obj) => (
        <div key={obj.id} className={"slide"}>
          <img src={process.env.PUBLIC_URL + `/Imgs/img${index}.jpeg`} alt="" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction="next" />
      <BtnSlider moveSlide={prevSlide} direction="prev" />

      <br /><br /><br /><br />
    </div>
  );
}
