import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './corousel.css';

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div>
          <img className="object-contain w-full h-auto"  src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" alt="Image 1" />
        </div>
        <div>
          <img className="object-contain w-full h-auto"  src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" alt="Image 2" />
        </div>
        <div>
          <img className="object-contain w-full h-auto"  src="http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
