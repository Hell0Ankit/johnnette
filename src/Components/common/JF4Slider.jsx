import React, { useState, useEffect } from 'react';
import Slide from "../../assets/img/JF4/JF4_hero.webp";
import Slide1 from "../../assets/img/JF4/slide_1.jpg";
import Slide2 from "../../assets/img/JF4/slide_2.jpg";

const JF4Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ... (slides array remains the same as your code)
  const slides = [
    {
      title: "JOHNNETTE JF-4",
      subtitle: "OVERVIEW",
      data: [
        ["Wingspan", "14 m"],
        ["AUW", "1800    kg"],
        ["Payload Weight", "400 kg"],
        ["Payload", "EO/IR, Radar, Ammo"],
        ["Service Ceiling", "30,000 ft"],
        ["Propulsion", "Turbo PROP"]
      ],
      img: Slide
    },
    {
      subtitle: "PERFORMANCE",
      data: [
        ["COMMUNICATION", "RF/SATCOM"],
        ["OPERATIONAL RANGE", "350 km"],
        ["Endurance", "16+ Hrs"],
        ["Operating Temperature", "-30° to +55°C"],
        ["Take-off/Recovery", "Runway Dependant"]
      ],
      img: Slide1
    },
    {
      subtitle: "FEATURES",
      list: [
        "Fully Automatic Navigation and Route Tracking Feature",
        "Semi-Autonomous Flight Modes Support",
        "Precise Auto Takeoff and Landing with Built-in Sensor Fusion",
        "Fully Automatic Taxi and Parking Feature",
        "Fault Tolerant and 3 Redundant Sensor Fusion Application"
      ],
      img: Slide
    },
    {
      subtitle: "ADVANTAGES",
      list: [
        " Dual Redundant SATCOM + Dual Redundant LOS",
        "Fully Automatic Flight Control and 3 Redundant Autopilot System",
        "Navigation with Internal Sensor Fusion Without Dependency on GPS + NAVIC (IRNSS)"
      ],
      img: Slide2
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <div className="relative w-full overflow-hidden pb-12 lg:py-10">
      {/* 1. Added more horizontal padding (px-12 to px-24) to keep content away from arrows */}
      <div 
        className="flex transition-transform duration-700 ease-in-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex flex-col-reverse md:flex-row items-center justify-evenly lg:justify-between px-10 md:px-24 lg:px-32 gap-10">
            
            {/* Left Content */}
            <div className="w-full md:flex-1 space-y-4 md:space-y-6">
              {slide.title && (
                <h2 className="text-[28px] md:text-[40px] lg:text-[50px] font-bold leading-tight">
                  {slide.title}
                </h2>
              )}
              <h3 className="text-[20px] md:text-[28px] lg:text-[35px] uppercase  text-[var(--text)]">
                {slide.subtitle}
              </h3>
              
              {/* Responsive Table: Text size scales down on mobile */}
              <table className="w-full border-collapse">
                <tbody className="divide-y divide-gray-700">
                  {slide.data?.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 md:py-3 text-[14px] md:text-[18px] uppercase font-medium">{row[0]}</td>
                      <td className="py-2 md:py-3 text-[14px] md:text-[18px] uppercase text-right">{row[1]}</td>
                    </tr>
                  ))}
                  {slide.list?.map((item, i) => (
                    <tr key={i}>
                      <td className="py-2 md:py-3 text-[14px] md:text-[18px] uppercase flex items-center gap-3">
                        <i class="fa-solid fa-angle-right"></i>
                        <span>{item}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Right Image: Hidden on very small screens or resized */}
            <div className="w-full md:flex-1 flex justify-center md:justify-end">
              <img 
                src={slide.img} 
                alt={slide.subtitle} 
                className="w-full max-w-[300px] md:max-w-full h-auto rounded-md shadow-2xl transform transition hover:scale-105 duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 2. Navigation Buttons: Adjusted positioning (left-2, right-2) and background for visibility */}
       <button  onClick={prevSlide} className="absolute left-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-none lg:border border-white/20 rounded-full lg:hover:bg-white lg:hover:text-black transition-all z-30 group">
          <i className="text-[20px] md:text-[25px] fa-solid fa-angle-left"></i>
      </button>

      <button onClick={nextSlide}className="absolute right-1 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border-none lg:border border-white/20 rounded-full lg:hover:bg-white lg:hover:text-black transition-all z-30 group" >
          <i className="text-[20px] md:text-[25px] fa-solid fa-angle-right"></i>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === currentIndex ? 'w-8 bg-[var(--brand-color)]' : 'w-2 bg-[var(--text)]'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default JF4Slider