const SectionHeading = ({ title }) => (
  <div className="body-container flex items-center justify-center w-full my-10 md:my-16 px-4">
    
    {/* LEFT SIDE */}
    <div className="hidden md:flex items-center flex-grow">
       <div className="flex-grow h-[1px] bg-gradient-to-r from-transparent to-[var(--text)]"></div>
       <div className="w-2 h-2 rotate-45 bg-[var(--brand-color)] mx-2 shrink-0"></div>
    </div>
    
    {/* CENTER HEADING */}
    <h2 className="text-[25px] md:text-[35px] lg:text-[40px] px-4 md:px-8 text-[var(--text)] uppercase text-center shrink-0">
      {title}
    </h2>

    {/* RIGHT SIDE*/}
    <div className="hidden md:flex items-center flex-grow">
       <div className="w-2 h-2 rotate-45 bg-[var(--brand-color)] mx-2 shrink-0"></div>
       <div className="flex-grow h-[1px] bg-gradient-to-l from-transparent to-[var(--text)]"></div>
    </div>
  </div>
);

export default SectionHeading;