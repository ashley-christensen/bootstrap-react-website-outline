import React from 'react';
import Slider1 from '../images/slider1.jpg';
import Slider2 from '../images/slider2.jpg';
import Slider3 from '../images/slider6.jpg';

const Slider = () => {
  return (
    <div
      id='carouselExampleInterval'
      class='carousel slide'
      data-bs-ride='carousel'
    >
      <div class='carousel-inner'>
        <div class='carousel-item active' data-bs-interval='4000'>
          <img src={Slider3} class='d-block w-100' alt='...' />
        </div>
        <div class='carousel-item' data-bs-interval='2000'>
          <img src={Slider1} class='d-block w-100' alt='...' />
        </div>
        <div class='carousel-item'>
          <img src={Slider2} class='d-block w-100' alt='...' />
        </div>
      </div>
      <button
        class='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='prev'
      >
        <span class='carousel-control-prev-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Previous</span>
      </button>
      <button
        class='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleInterval'
        data-bs-slide='next'
      >
        <span class='carousel-control-next-icon' aria-hidden='true'></span>
        <span class='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default Slider;
