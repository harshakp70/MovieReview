import React from 'react'
import { useState,useEffect } from 'react';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // Auto-slide every 5 seconds
  
      return () => clearInterval(timer); // Cleanup timer
    }, [currentIndex]);
  
   
    return (
      <div className="relative h-70 overflow-hidden rounded-lg shadow-lg">
        <div className="flex transition-transform duration-500 ease-in-out  " style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div key={index} className="w-full  flex-shrink-0">
              <img src={item.poster} alt={item.title} className="w-full h-64 object-cover overflow-hidden " />
              <div className="absolute bottom-0 left-0 right-0 bg-gray-900 bg-opacity-50 text-white p-4">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 text-white hover:bg-opacity-70">
          ‹
        </button>
        <button onClick={nextSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 p-2 text-white hover:bg-opacity-70">
          ›
        </button>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-2 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'} focus:outline-none`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };
   export default Carousel