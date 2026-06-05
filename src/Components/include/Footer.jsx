import logo from "../../assets/img/logo/logo.png";
import {NavLink, Link } from "react-router-dom";
import Brochure from "../common/Brochure";
import React, { useState } from 'react';
// import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
        <section className="section-custom ">
            <footer className='top-bottom-container py-6 lg:py-10 flex flex-wrap justify-around gap-6 text-[var(--text-secondary)]'>
                <div className="col-1 space-y-4 w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] text-center md:text-left">
                    <div className="logo flex justify-center md:justify-start ">
                       <a href="#"><img src={logo} alt="logo" className='w-[120px] lg:w-[100px] h-auto object-contain image-rendering-crisp' /> </a> 
                    </div>
                    <div className="address-detail text-[14px]">
                        <p>Johnnette Technologies Pvt Ltd</p>
                        <p>A-38, sector 67, Noida</p>
                        <p> Gautam Buddha Nagar</p>
                        <p>Noida - 201301, India</p>
                        <p><i class="fa-solid fa-envelope"></i> <a href="mailto:contact@johnnette.com">contact@johnnette.com</a></p>
                    </div>
                    <div className="social-icons flex gap-2 justify-center md:justify-start">

  <a
    href="https://www.facebook.com/JOHNNETTETECHNOLOGIES/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our Facebook page"
    className="bg-[var(--secondary)] flex items-center justify-center w-[30px] h-[30px] rounded-full"
  >
    <i
      className="fa-brands fa-facebook-f text-[18px] text-[#0064e0]"
      aria-hidden="true"
    ></i>
  </a>

  <a
    href="https://www.linkedin.com/company/johnnette-technologies/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our LinkedIn page"
    className="bg-[var(--secondary)] flex items-center justify-center w-[30px] h-[30px] rounded-full"
  >
    <i
      className="fa-brands fa-linkedin-in text-[18px] text-[#0a66c2]"
      aria-hidden="true"
    ></i>
  </a>

  <a
    href="https://www.youtube.com/channel/UCSLaO3SKQs4v4jUIgSacQgg"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit our YouTube channel"
    className="bg-[var(--secondary)] flex items-center justify-center w-[30px] h-[30px] rounded-full"
  >
    <i
      className="fa-brands fa-youtube text-[18px] text-[#ff0000]"
      aria-hidden="true"
    ></i>
  </a>

</div>
                </div>
                <div className="col-2  w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] text-center md:text-left">
                    <ul className="space-y-2 text-[14px]">
                        <li>
                            <Link to="/about" className="relative group py-1">About Us
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/career"  className="relative group py-1" > Career 
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/blogs" className="relative group py-1" >Blog
                                <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>

                        <li>
                            <NavLink to="/contact#global_reach" className="relative group py-1" >Global Reach
                                <span className="absolute left-0 bottom-0 hover-line"></span>
                            </NavLink>
                        </li>
                        
                         <li>
                            <NavLink to="/accolades-and-certifications#satisfactoryletters" className="relative group py-1" >Satisfactory Letters
                                <span className="absolute left-0 bottom-0 hover-line"></span>
                            </NavLink>
                        </li>

                        <li>
                            <Link to="/accolades-and-certifications" className="relative group py-1" >Accolades and Certifications
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-2 w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] text-center md:text-left">
                    <ul className="text-[14px] space-y-2">
                        <li>
                            <Link to="/contact" className="relative group py-1" >Contact Us
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jf4" className="relative group py-1" >Johnnette JF-4
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/jf2" className="relative group py-1">Johnnette JF-2
                            
                            <span className="absolute left-0 bottom-0 hover-line"></span></Link>
                        </li>
                        <li>
                            <Link to="/jm1" className="relative group py-1">Johnnette JM-1
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/space" className="relative group py-1">Space
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link> 
                        </li>
                    </ul>
                </div>
                <div className="col-4  w-full md:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] text-center md:text-left">
                    <ul className="text-[14px] space-y-2">
                        <li>
                            <Link to="/policy" className="relative group py-1">Privacy Policy
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cookies" className="relative group py-1">Cookies Policy
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" className="relative group py-1">Terms
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" onClick={(e) => {
                                            e.preventDefault(); 
                                            setIsOpen(true); 
                                            }} 
                                className="relative group py-1"> Downloads
                                <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/news" className="relative group py-1">News & Media Latest Update
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/code-ethics" className="relative group py-1">Code of Ethics and Business Conduct
                            <span className="absolute left-0 bottom-0 hover-line"></span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>

            <div className="footer-bottom flex justify-center items-center h-[40px]">
                <p className='text-[13px] font-[600] text-[var(--text-secondary)]'> © 2026 Johnnette Group | All rights reserved.</p>
            </div>
            <Brochure isOpen={isOpen} setIsOpen={setIsOpen} />
      </section>
  )
}

export default Footer

