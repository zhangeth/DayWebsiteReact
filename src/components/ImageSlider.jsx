import React, { useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '../css/imageSlider.css'

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3
    );
    console.log('currIndex', currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 3 ? 0 : prevIndex + 3 
    );
    console.log('imgs', images);
  };

  return (
    <div className="slider-container">
        <div className="row">
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={images[currentIndex]} ></StorageImage>
            </div>
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={images[currentIndex + 1]} ></StorageImage>
            </div>
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={images[currentIndex + 2]} ></StorageImage>
            </div>
        </div>
      <div className="slider-controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default ImageSlider;
