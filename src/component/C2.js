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
          <img className="object-contain w-full h-auto"  src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph" alt="Image 1" />
        </div>
        <div>
          <img className="object-contain w-full h-auto"  src="https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph" alt="Image 2" />
        </div>
        <div>
          <img className="object-contain w-full h-auto"  src="https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph" alt="Image 3" />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
