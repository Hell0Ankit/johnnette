import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModernSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  if (!slides || slides.length === 0) return null;

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : prevSlide);

  const activeSlide = slides[current];

  return (
    <div className="relative w-full min-h-[600px] bg-black text-white p-10 flex items-center justify-center overflow-hidden font-sans">
      
      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute left-6 z-20 p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all">
        <ChevronLeft size={24} />
      </button>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Dynamic Table */}
        <div className="animate-fadeIn">
          <h2 className="text-4xl font-bold mb-2 tracking-tighter uppercase">{activeSlide.title}</h2>
          <p className="text-gray-500 mb-8 font-semibold tracking-widest text-sm">OVERVIEW</p>

          <div className="border-t border-gray-800">
            
            {activeSlide.details && Object.entries(activeSlide.details).map(([key, value], idx) => (
              <div key={idx} className="flex justify-between py-4 border-b border-gray-800 text-[13px] tracking-wide">
                <span className="text-gray-500 font-bold uppercase">{key.replace(/_/g, ' ')}</span>
                <span className="font-semibold text-right max-w-[250px]">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image with Spotlight Effect */}
        <div className="relative flex justify-center items-center">
          <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]"></div>
          <img 
            src={activeSlide.image} 
            alt={activeSlide.title} 
            className="relative z-10 w-full max-h-[400px] object-contain transition-all duration-500 ease-in-out"
          />
        </div>
      </div>

      <button onClick={nextSlide} className="absolute right-6 z-20 p-2 border border-gray-700 rounded-full hover:bg-white hover:text-black transition-all">
        <ChevronRight size={24} />
      </button>

      {/* Pagination */}
      <div className="absolute bottom-12 flex gap-3">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${i === current ? 'bg-white w-8' : 'bg-gray-700 w-4'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernSlider;