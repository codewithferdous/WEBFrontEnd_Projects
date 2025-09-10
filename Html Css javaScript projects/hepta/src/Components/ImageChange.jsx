// src/components/ImageCarousel.js
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import "../../src/Styling/ImageChange.css";
// Import the images you want to display
import image1 from '../../src/Styling/image1.webp';
import image2 from '../../src/Styling/image2.webp';
import image3 from '../../src/Styling/image3.webp';

const images = [image1, image2, image3];

const ImageChange = (props) => {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous image
  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to go to the next image
  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
    <div className="image-data">
        <h1 className="img-heading">{props.headingText}</h1>
        <p className="img-para">{props.description}
        </p>
      </div>
      <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false}}
      transition={{ duration: 1 }}
    > 
    <div className="img-change">
          <div className="img-change-inner">
        <img src={images[currentIndex]} alt={`img-change-${currentIndex}`} className="img-change-image" />
      </div>
      <button onClick={goToPrevious} className="img-change-button left">&lt;</button>
      <button onClick={goToNext} className="img-change-button right">&gt;</button>
    </div></motion.div>
    <div className='colorset'>
    </div>
    </>
    
  );
};

export default ImageChange;
