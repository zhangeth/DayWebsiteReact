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
    // the idea is this, we hav our currIndex. Then have row of StorageImage <row> col col col <row>
    // then the buttons will transform by your mom
    /*
            {images.map((image, index) => (
          <div key={index} className="slide">
            <StorageImage imgKey={`${images[index]}.jpg`} ></StorageImage>
          </div>
        ))}
    */
    <div className="slider-container">
        <div className="row">
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={`${images[currentIndex]}.jpg`} ></StorageImage>
            </div>
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={`${images[currentIndex + 1]}.jpg`} ></StorageImage>
            </div>
            <div className="col" style={{borderRight: '1px solid black'}}>
                <StorageImage imgKey={`${images[currentIndex + 2]}.jpg`} ></StorageImage>
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
