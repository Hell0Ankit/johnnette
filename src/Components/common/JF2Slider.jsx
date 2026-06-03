import React, { useState, useEffect } from 'react';
import Slide1 from "../../assets/img/JF2/slide.webp";
import Slide2 from "../../assets/img/JF2/slide1.webp";
// import Slide3 from "../../assets/img/JF2/slide_3.jpg";


const JF2Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const slides = [
    {
      title: "JOHNNETTE JF-2",
      subtitle: "OVERVIEW",
      data: [
        ["Wingspan", "220 cm <span class='text-[var(--text-secondary)] text-sm'> / 2.2 m </span>"],
        ["Length", "153 cm <span class='text-[var(--text-secondary)] text-sm'>/ 1.53 m </span>"],
        ["Height", "30 cm <span class='text-[var(--text-secondary)] text-sm'>/ 0.3 m </span>"],
        ["Aircraft Weight", "4600 g  <span class='text-[var(--text-secondary)] text-sm'>/ 4.6 kg </span>"],
        ["PAYLOAD", "Day & Night (Thermal) Gymbalised Cameras"],
        ["Design Patented", "Serial No. 167936"]
      ],
      img: Slide2
    },
    {
      subtitle: "OVERVIEW",
      data: [
        ["Propulsion", "Electric"],
        ["Material RANGE", "EPP+ Composite"],
        ["Cruise Speed", "45 km/hr"],
        ["Altitude Capabilities", "Maximum 1000m Operational 500 m"],
        ["Max Launch Altitude", "18000 ft"]
      ],
      img: Slide1
    },


    {
      subtitle: "PERFORMANCE",
      data: [
        ["Endurance", "60 min<span class='text-[var(--text-secondary)] text-sm'> / 1 Hour </span>"],
        ["Maximum Speed", "60 km/hr"],
        ["Range", "10 Km"],
        ["Operating Temperature", "-10° to 50°C (Field Tested)"],
        ["Launch/Recovery", "Hand Launch / Belly Landing"],
      ],
      img: Slide2
    },

    {
    subtitle: "FEATURES",
    
      detailedList: [
        { 
          title: "Communication", 
          description: "HD Live Video Stream with Realtime data link" 
        },
        { 
          title: "Payload Options", 
          description: "Gimballed 1080p Day Camera with 10x Zoom 640p Thermal Camera with 4x digital zoom (Swappable Day and Night payload)" 
        },
        { 
          title: "Failsafe", 
          description: "Return to Home on Low Battery and Communication Loss" 
        }
      ],
      img: Slide1
    },
    

    {
    subtitle: "FEATURES",
    
      detailedList: [
        { 
          title: "Flight Modes", 
          description: "Manual, Auto, Loiter , GPS-assisted" 
        },
        { 
          title: "Intelligent Ground Control Station", 
          description: "MIL STD All weather laptop integrated with our software" 
        },
        { 
          title: "Software", 
          description: "Johnnette GCS (Closed Source) Encrypted" 
        }
      ],
      img: Slide2
    },


    {
      subtitle: "ADVANTAGES",
      list: [
        " Rugged for extended, reliable use in harsh environments",
        "Backpackable, lightweight & hand-launched",
        " Indigenous Content:  80%",
        "Crashproof for Avionics and Payloads",
        "Anti Jamming & Anti Spoofing",
      ],
      img: Slide1
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
                <tbody className="divide-y divide-gray-800">
                  {slide.data?.map((row, i) => (
                    <tr key={i}>
                      <td className="py-2 md:py-3 text-[14px] md:text-[16px] uppercase">{row[0]}</td>
                      {/* Using dangerouslySetInnerHTML to render the span tags */}
                      <td 
                        className="py-2 md:py-3 text-[14px] md:text-[16px] uppercase text-right"
                        dangerouslySetInnerHTML={{ __html: row[1] }}
                      ></td>
                    </tr>
                  ))}

                 {/* Bold Heading with Description */}
                  {slide.detailedList?.map((item, i) => (
                    <tr key={`detailed-${i}`}>
                      <td className="py-3 text-[14px] md:text-[16px] flex items-start gap-3">
                        {/* Arrrow Icon */}
                        <i className="fa-solid fa-angle-right mt-2  text-[var(--text)]"></i>
                        
                        <div className="flex flex-col">
                          {/* Bold Heading */}
                          <span className="font-[600] text-[20px] md:text-[22px] text-[text]">
                            {item.title}
                          </span>
                          {/* Description Text */}
                          <span className="text-[14px] md:text-[16px] uppercase">
                            {item.description}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {slide.list?.map((item, i) => (
                    <tr key={i}>
                      <td className="py-3 text-[14px] md:text-[16px] uppercase flex items-start gap-3">
                        <i className="fa-solid fa-angle-right mt-1 text-[var(--text)]"></i>
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

export default JF2Slider