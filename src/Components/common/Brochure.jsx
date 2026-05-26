import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Brochure = ({ isOpen, setIsOpen }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS Keys
    const SERVICE_ID = 'service_ntladqx';
    const TEMPLATE_ID = 'template_5hz6mrz';
    const PUBLIC_KEY = 'xi0MxM_7LZfkvSO6r';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        // PDF Download Logic
        const link = document.createElement('a');
        link.href = '/brochure.pdf'; 
        link.download = 'Our_Brochure.pdf';
        link.click();
        
        alert("Details sent! Starting download...");
        setIsOpen(false); 
        e.target.reset(); 
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        alert("Failed to send details.");
      })
      .finally(() => setLoading(false));
  };

  if (!isOpen) return null; 
  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] p-4">
      {/* Modal Box */}
      <div className="bg-white p-10 md:p-12 w-full max-w-[600px] relative rounded-sm shadow-2xl">
        
        {/* Close Icon (X) */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-6 text-[40px] text-black font-light hover:text-[var(--brand-color)] transition-colors"
        >
          &times;
        </button>

        <h2 className="text-[30px] text-gray-800 mb-8 font-normal text-left">
          Fill up the form to download the brochure.
        </h2>

        <form ref={form} onSubmit={handleSubmit} className="space-y-8">
          
          {/* Full Name */}
          <div className="border-b-2 border-black text-left">
            <label className="text-[16px] text-black mb-1 block">Full Name</label>
            <input 
              type="text" name="user_name" required 
              className="w-full py-1 pb-2 outline-none text-gray-800 bg-transparent text-lg focus:ring-0" 
              placeholder="Full Name"
            />
          </div>

          {/* Company Name */}
          <div className="border-b-2 border-black text-left">
            <label className="text-[16px] text-black mb-1 block">Company Name</label>
            <input 
              type="text" name="company_name" required 
              className="w-full py-1 pb-2 outline-none text-gray-800 bg-transparent text-lg focus:ring-0" 
              placeholder="Company Name"
            />
          </div>

          {/* Phone Number */}
          <div className="border-b-2 border-black text-left">
            <label className="text-[16px] text-black mb-1 block">Phone Number</label>
            <input 
              type="tel" name="user_phone" required 
              className="w-full py-1 pb-2 outline-none text-gray-800 bg-transparent text-lg focus:ring-0" 
              placeholder="Phone Number"
            />
          </div>

          {/* Email */}
          <div className="border-b-2 border-black text-left">
            <label className="text-[16px] text-black mb-1 block">Email</label>
            <input 
              type="email" name="user_email" required 
              className="w-full py-1 pb-2 outline-none text-gray-800 bg-transparent text-lg focus:ring-0" 
              placeholder="Email"
            />
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            disabled={loading}
            className="btn btn-primary"
          >
            {loading ? 'Sending...' : 'Download'}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Brochure;