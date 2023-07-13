
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
  'http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1730.JPG',
  'http://www.mnnit.ac.in/images/newstories/2022/slider/Rama_Verma_with_President.png',
  'http://www.mnnit.ac.in/images/newstories/2022/slider/yoga2023/DSC_1750.JPG',
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

