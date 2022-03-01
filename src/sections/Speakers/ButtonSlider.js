import React from "react";
import './Speakers.css';

import leftArrow from "../../graphics/assets/speakers/leftArrow.svg";
import rightArrow from "../../graphics/assets/speakers/rightArrow.svg";

function ButtonSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}

export default ButtonSlider;