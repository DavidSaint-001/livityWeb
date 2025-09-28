import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2400,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='carousel'>
      <Slider {...settings}>   
        <div>
          <p>🌿 Free shipping on orders above ₦50,000</p>
        </div>
        <div>
          <p>✨ for customised designs reach out to us via our email!</p>
        </div>
        <div>
          <p>💚 Eco-friendly products for a sustainable lifestyle</p>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
