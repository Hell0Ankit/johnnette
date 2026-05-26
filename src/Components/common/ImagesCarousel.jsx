import React, { useState } from 'react';

const ImagesCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full mx-auto overflow-hidden group rounded-2xl shadow-lg bg-gray-100 h-full">
      
      {/* Wrapper for Sliding Effect */}
      <div 
        className="flex transition-transform duration-500 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={img.src}
              alt={`Slide ${index}`}
              className="w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Buttons: Only visible on Hover */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/20"
      >
                <i class="text-[20px] md:text-[25px] fa-solid fa-angle-left"></i>

      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 border border-white/20"
      >
                <i class="text-[20px] md:text-[25px] fa-solid fa-angle-right"></i>

      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 bg-[var(--brand-color)]" : "w-2 bg-[var(--text)]"  
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesCarousel;



