import React, { useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import '../css/articles.css'

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
    console.log('currIndex', currentIndex);
  };

  return (
    <div className="row align-items-center">
        <div className="col-auto">
            <button onClick={prevSlide} className="btn btn-custom">&lt;</button>
        </div>
        <div className="col">
            <StorageImage imgKey={images[currentIndex]} className='storageImg'/>
        </div>
        <div className="col">
            {images[currentIndex + 1] && (
                <StorageImage imgKey={images[currentIndex + 1]} className='storageImg'/>
            )}
        </div>
        <div className="col">
            {images[currentIndex + 2] && (
                <StorageImage imgKey={images[currentIndex + 2]} className='storageImg'/>
            )}
        </div>
        <div className="col-auto">
            <button onClick={nextSlide} className="btn btn-custom">&gt;</button>
        </div>
    </div>
  );
};

export default ImageSlider;
