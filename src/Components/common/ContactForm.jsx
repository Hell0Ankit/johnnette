import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    const SERVICE_ID = 'service_ntladqx';
    const TEMPLATE_ID = 'template_5hz6mrz';
    const PUBLIC_KEY = 'xi0MxM_7LZfkvSO6r';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ type: 'success', msg: 'Message Sent! We will contact you soon.' });
        e.target.reset();
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus({ type: 'error', msg: 'Something went wrong. Please try again.' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="bg-zinc-50">
      <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
        <h2 className="primary-heading text-gray-900 mb-2 ">
          Get In Touch
        </h2>
       

        <form ref={form} onSubmit={sendEmail} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Name */}
            <div className="relative border-b-2 border-gray-200 focus-within:border-black transition-all">
              <input 
                type="text" name="user_name" placeholder="Full Name" required
                className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400 font-sans"
              />
            </div>

            {/* Email */}
            <div className="relative border-b-2 border-gray-200 focus-within:border-black transition-all">
              <input 
                type="email" name="user_email" placeholder="Email Address" required
                className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400 font-sans"
              />
            </div>
          </div>

          {/* Subject or Phone */}
          <div className="relative border-b-2 border-gray-200 focus-within:border-black transition-all">
            <input 
              type="tel" name="user_phone" placeholder="Phone Number (Optional)"
              className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400 font-sans"
            />
          </div>

          {/* Message */}
          <div className="relative border-b-2 border-gray-200 focus-within:border-black transition-all">
            <textarea 
              name="message" placeholder="How We Can Help You?" rows="3" required
              className="w-full py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400 resize-none font-sans"
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <button 
              type="submit"
              disabled={loading}
              className={`btn btn-primary
                ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 active:scale-95'}`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            
            {status.msg && (
              <div className={`text-sm px-4 py-2 border ${
                status.type === 'success' ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'
              }`}>
                {status.msg}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;