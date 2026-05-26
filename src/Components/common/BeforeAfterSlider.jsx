import React, { useState, useRef, useEffect } from 'react';

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const bounds = containerRef.current.getBoundingClientRect();
    let percentage = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const startDrag = (e) => {
    e.preventDefault();
    const onMouseMove = (e) => handleMove(e.clientX);
    const stopDrag = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
  };

  return (
    <div className="w-full flex justify-center items-center p-0 md:p-4">
      <div
        ref={containerRef}
        className="relative w-[90%] mx-auto aspect-video md:rounded-xl shadow-2xl overflow-hidden select-none cursor-ew-resize"
        onMouseDown={(e) => { handleMove(e.clientX); startDrag(e); }}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* BACKGROUND IMAGE  */}
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* OVERLAY IMAGE  */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden z-10"
          style={{ width: `${position}%` }}
        >
          <img
            src={afterImage}
            alt="After"
            className="absolute top-0 left-0 h-full object-cover pointer-events-none"
            style={{ width: containerWidth, maxWidth: 'none' }}
          />
        </div>

        {/* SLIDER HANDLE */}
        <div
          className="absolute top-1/2 -translate-y-1/2 h-[50%] w-[4px] z-20"
          style={{
            left: `${position}%`,
            transform: "translateX(-50%) translateY(-50%)",
            background: `linear-gradient(to bottom, transparent, var(--brand-color) 15%, var(--brand-color) 85%, transparent)`,
          }}
        >
          <div className="absolute top-1/2 left-1/2 w-[4px] lg:w-10 h-3 lg:h-10 bg-[var(--brand-color)] border-[2px] lg:border-[8px] border-[var(--text)] text-[var(--text)] rounded-full -translate-x-1/2 -translate-y-1/2 shadow-xl flex items-center justify-center p-3 lg:p-6">
            <div className="flex justify-center text-[var(--text)]">
              <i className="fa-solid fa-caret-left text-[10px] lg:text-[20px]"></i>
              <i className="fa-solid fa-caret-right text-[10px] lg:text-[20px]"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;