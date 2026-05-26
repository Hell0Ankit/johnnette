import React, { useState } from 'react';

const PayloadsTab = ({ data, sectionTitle = "PAYLOADS" }) => {
  const [activeMainTab, setActiveMainTab] = useState(Object.keys(data)[0]);
  const [activeSubTab, setActiveSubTab] = useState('hardware');

  return (
    <div className="text-[var(--text)] min-h-screen p-6 md:p-16">
      <div className="max-w-6xl mx-auto">
        
        {/* SECTION TITLE */}
        <div className="text-center mb-10">
          <h2 className="text-[20px] md:text-[28px] lg:text-[35px] tracking-wider uppercase  text-[var(--text)] mb-4">{sectionTitle}</h2>
          <div className="w-24 h-[2px]  bg-[var(--brand-color)] mx-auto"></div>
        </div>

        {/* MAIN TABS */}
        <div className="flex justify-center gap-12 p-4 border-t border-b border-gray-900 py-8">
          {Object.keys(data).map((type) => (
            <button 
              key={type}
              onClick={() => setActiveMainTab(type)}
              className={` text-[20px] lg:text-[25px]  transition-all ${
                activeMainTab === type ? 'text-[var(--brand-color)]' : 'text-white hover:text-gray-400'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)} Payload
            </button>
          ))}
        </div>
        <div className="w-full h-[1px] bg-gray-800 mb-10"></div>

        {/* SUB TABS */}
        <div className="flex flex-wrap justify-center  gap-6 md:gap-10 mb-12  pl-6">
          {['hardware', 'camera', 'tracking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`text-[18px] lg:text-[20px]  transition-all ${
                activeSubTab === tab ? 'text-[var(--brand-color)]' : 'text-white hover:text-gray-400'
              }`}
            >
              {tab === 'hardware' ? 'Hardware Parameter' : tab === 'camera' ? 'Camera Spec' : 'Camera Object Tracking'}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {data[activeMainTab]?.[activeSubTab]?.specs.map((item, index) => (
              <div key={index} className="group border-b border-gray-900 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-red-600 rotate-45"></div>
                  <span className="font-semibold text-[20px] ">{item.label}</span>
                </div>
                <span className="text-[18px] text-[var(--text-secondary)] ml-5">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <img 
              src={data[activeMainTab]?.[activeSubTab]?.image} 
              alt="Payload" 
              className="max-w-full h-[300px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayloadsTab;