
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Carousel = ({ images, autoplayDelay = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let intervalId;

    if (autoplay) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, autoplayDelay);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [autoplay, images.length, autoplayDelay]);

  const handleMouseEnter = () => {
    setAutoplay(false);
  };

  const handleMouseLeave = () => {
    setAutoplay(true);
  };

  return (
    <div
      className="relative w-full"
      style={{ paddingBottom: '70%' }} // Adjust the value to decrease the height of the carousel
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Transition
            key={index}
            show={currentIndex === index}
            enter="transition-opacity duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-1000"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <img
              src={image}
              alt={`Carousel Image ${index}`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </Transition>
        ))}
      </div>
    </div>
  );
};



const images = [
  'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph',
  'https://img.freepik.com/free-photo/green-sprouts-dark-soil-against-blurred-background-symbolizing-concept-growth-potential_90220-1462.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph',
  'https://img.freepik.com/free-photo/cascade-boat-clean-china-natural-rural_1417-1356.jpg?size=626&ext=jpg&ga=GA1.2.2014565303.1683796265&semt=sph',
  // Add more image URLs here
];

const C2= () => {
  return (
    <div>
      
      <Carousel images={images} autoplayDelay={2000} />
    </div>
  );
};

export default C2;

