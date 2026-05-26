import React, { useEffect } from 'react';
import Navbar from "./include/Navbar";
import Footer from "./include/Footer";


const Layout = ({ children, title }) => {
  
  useEffect(() => {
    const baseTitle = "Johnnette Technologies";
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;
    window.scrollTo(0, 0);
  }, [title]);

  return (
      <div>
        {/* Navigation Bar */}
        <Navbar />

        <main>
             {children}
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
  );
};

export default Layout;