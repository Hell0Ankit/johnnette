import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Import Common Components 
import Layout from '../Components/Layout'
import ContactForm from '../Components/common/ContactForm';
import PageTopBarImage from '../Components/common/PageTopBarImage';
import SectionHeading from '../Components/common/SectionHeading';

// Import Images 
import contactimg from "../assets/img/contact/contact_us_3.webp";
import map_pin from "../assets/img/contact/icons/india.png";
import map_chart from "../assets/img/contact/MapChart.webp";

import { useGSAP } from "@gsap/react";
import { initAnimations } from "../animations/animation.js";

const Contact = () => {
    const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
useGSAP(() => {
            initAnimations();
        })
  return (
     <Layout title="Contact | Johnnette Technologies">
        <section className="section-custom">
          <PageTopBarImage
              title="Contact Us "
              bgImage={contactimg}
          />
        </section>

        <section className="section-custom py-20 px-6" id='contact'> 
            <div className="body-container grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side: Contact Form */}
                <div className=" fade-up bg-blue-600/10 py-14 px-5 card " >
                    <ContactForm />
                </div>

                {/* Right Side: Locations */}
                <div className="flex flex-col space-y-8">
                    {/* --- LOCATION 1: HEADQUARTER --- */}
                    <div className="fade-up bg-blue-600/10 p-8 card  hover:bg-blue-600/20 transition-all duration-300 group">
                        <div className=" flex items-center gap-5 pb-6 mb-6 border-b border-[#3a3a3a]">
                            <div className="flex-shrink-0">
                                <img 
                                    src={map_pin}
                                    alt="India Flag" 
                                    className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
                                />
                            </div>
                            <div>
                                <h3 className="primary-heading text-[25px]">INDIA</h3>
                                <p className="text-[16px] font-bold text-[#b3b3b3] uppercase tracking-[0.1em]">Headquarter</p>
                                </div>
                        </div>

                        <div className=" space-y-6">
                            <div className="flex gap-5 items-start">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <i className="fa-solid fa-location-dot text-[#ffff] text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-blue-50 text-lg mb-1">Address</h4>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    <span className="text-[#ffff] font-semibold italic">Johnnette Technologies Pvt Ltd</span><br />
                                        A-38, sector 67, Noida
                                        Gautam Bhuddha Nagar
                                        Noida - 201301, India
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex gap-5 items-center pt-5 border-t border-[#3a3a3a]">
                                <div className="bg-blue-500/20 p-2 rounded-lg">
                                    <i className="fa-solid fa-envelope text-[#ffff]"></i>
                                </div>
                                <a href="mailto:contact@johnnette.com" className="text-white text-link transition-colors font-medium">
                                    contact@johnnette.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* --- LOCATION 2: MFG UNIT --- */}
                    <div className="fade-up bg-emerald-600/10 p-8 card border border-emerald-500/20 hover:bg-emerald-600/20 transition-all duration-300 group">
                        <div className="flex items-center gap-5 pb-6 mb-6 border-b border-[#3a3a3a]">
                            <div className="flex-shrink-0">
                                <img 
                                    src={map_pin}
                                    alt="India Flag" 
                                    className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/20"
                                />
                            </div>
                            <div>
                                <h3 className="primary-heading text-[25px]">INDIA</h3>
                                <p className="text-[16px] font-bold text-[#b3b3b3] uppercase tracking-[0.1em]">MFG Unit & Test Site</p>
                                </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-5 items-start">
                                <div className="bg-emerald-500/20 p-2 rounded-lg">
                                    <i className="fa-solid fa-industry text-[#ffff] text-lg"></i>
                                </div>
                                <div>
                                    <h4 className="font-bold text-emerald-50 text-lg mb-1">Address</h4>
                                    <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                                    Survey No: 7-3, Vagemadugu Panchayath,<br />
                                    Bodapadu Village, Konakanamitla Mandal,<br />
                                    Prakasam District, AP – 523 241
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-custom overflow-hidden" id='global_reach'>
            <SectionHeading title="Our Global Reach" />
                <div className="relative w-full mt-10 group aspect-[16/9] md:aspect-auto">
                    <img  src={map_chart} alt="Johnnette Global Reach Map" 
                    className="w-full h-full  object-contain md:object-cover filter brightness-90 grayscale-[20%] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
                    />
                    {/*  Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
                </div>
        </section>
        
    </Layout>
  )
}

export default Contact