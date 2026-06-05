import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/img/logo/logo.png";


const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [navBackground, setNavBackground] = useState("bg-transparent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // --- Scroll Logic ---
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      // 1. Close sidebar automatically when the user starts scrolling
      // We use a 5px threshold to prevent accidental closing on tiny movements
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        setIsSidebarOpen(false);
      }

      // 2. Navbar Hide/Show logic
      if (currentScrollY === 0) {
        setIsVisible(true);
        setNavBackground("bg-transparent");
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scroll Down
      } else {
        setIsVisible(true); // Scroll Up
        setNavBackground("bg-black/90 shadow-md");
      }
      
      setLastScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
 
   
  return (
  
    <>
      <header
        className={` fixed top-0 left-0 w-full z-[60] transition-all duration-700 ease-in-out ${navBackground} ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="section-custom top-bottom-container">
          <nav className="flex justify-between items-center py-3 lg:py-4 text-[var(--secondary)]">
            
            {/* 1. Logo */}
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" className="w-[70px] lg:w-[100px] h-auto object-contain" />
              </Link>
            </div>

            {/* 2. Desktop Menu */}
            <div className="menu-item hidden md:flex gap-8 font-[400] uppercase">
              <NavLink to="/jf4" className={({ isActive }) => `relative group py-1 ${isActive ? "text-[var(--brand-color)]" : "text-[var(--text)]"}`}>
                JF-4
                <span className="absolute left-0 bottom-0 hover-line"></span>
              
              </NavLink>

              <NavLink to="/jf2" className={({ isActive }) => `relative group py-1 ${isActive ? "text-[var(--brand-color)]" : "text-[var(--text)]"}`}>
                JF-2
                <span className="absolute left-0 bottom-0 hover-line"></span>
              </NavLink>

              <NavLink to="/jm1" className={({ isActive }) => `relative group py-1 ${isActive ? "text-[var(--brand-color)]" : "text-[var(--text)]"}`}>
                JM-1
                <span className="absolute left-0 bottom-0 hover-line"></span>
              </NavLink>

              <NavLink to="/space" className={({ isActive }) => `relative group py-1 ${isActive ? "text-[var(--brand-color)]" : "text-[var(--text)]"}`}>
                Space
                <span className="absolute left-0 bottom-0 hover-line"></span>
              </NavLink>
            </div>

            {/* 3. Hamburger Button */}
          <div className="menu-btn">
  <button
    type="button"
    onClick={toggleSidebar}
    aria-label={isSidebarOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={isSidebarOpen}
    className="text-[var(--text)] hover:text-[var(--brand-color)]"
  >
    <i
      className={`fa-solid ${isSidebarOpen ? "fa-xmark" : "fa-bars"} text-[24px]`}
      aria-hidden="true"
    ></i>
  </button>
</div>
          </nav>
        </div>
      </header>

      {/* --- SIDEBAR COMPONENTS --- */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 z-[70] transition-opacity duration-500 ${isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Panel  */}
      <div  className={`fixed top-0 right-0 h-screen w-[300px] sm:w-[400px] bg-[var(--bg-color)] z-[80] shadow-2xl transition-transform duration-500 ease-in-out p-10 flex flex-col ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`} >
        <button onClick={toggleSidebar} className="self-end text-[var(--text)] text-2xl mb-10">
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="menu flex flex-col gap-4 text-right uppercase font-[400]">
          <NavLink to="/jf4" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Johnnette JF-4
          </NavLink>

          <NavLink to="/jf2" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Johnnette JF-2
          </NavLink>

          <NavLink to="/jm1" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            JOHNNETTE JM-1
          </NavLink>

          <NavLink to="/space" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Space
          </NavLink>

          <NavLink to="/about" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            About
          </NavLink>

          <NavLink to="/blogs" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Blogs
          </NavLink>

          <NavLink to="/career" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Career
          </NavLink>

          <NavLink to="/contact" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Contact
          </NavLink>

          <NavLink to="/contact#global_reach" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Global Reach
          </NavLink>

          <NavLink to="/news" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            News and Media
          </NavLink>

          <NavLink to="/accolades-and-certifications" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-lg border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
            Accolades and Certifications
          </NavLink>

          <NavLink to="/accolades-and-certifications#satisfactoryletters" onClick={() => setIsSidebarOpen(false)} className={({ isActive }) => `text-[15px] border-b border-white/10 pb-2 ${isActive ? "text-[var(--brand-color)] border-[var(--brand-color)]" : "text-[var(--text)]"}`}>
           Satisfactory Letters
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;