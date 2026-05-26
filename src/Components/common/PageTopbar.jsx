const PageTopbar = ({
  bgImage,
  mobileImage, 
  title,
  up_to,
  range,
  flightTime,
  weight,
  range_title,
  flight_time_title,
  weight_title
}) => {
  return (

    <div className="relative h-auto lg:h-screen overflow-hidden flex flex-col">
      
      {/* 1. Image Section */}
      <div className="relative lg:absolute top-0 left-0 w-full h-full lg:h-full">
        <img 
          src={mobileImage || bgImage} 
          alt={title}
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* Content Section */}
     
      <div className="relative lg:absolute inset-0 z-10 flex flex-col justify-center items-center text-[var(--text)] text-center px-4 py-[50px] lg:py-0 bg-[var(--bg-color)]  md:bg-transparent">
        
        <h2 className="text-[30px] sm:text-[55px] lg:text-[70px] uppercase font-[600] mb-6"> 
          {title} 
        </h2>

        <div className="w-full max-w-xl mx-auto overflow-x-auto flex justify-center">
          <table className="w-full border-collapse text-center">
            <thead className="">
              <tr className="">
                <th className="px-2 lg:px-6 font-[500] text-[14px] lg:text-[20px] text-[var(--text)]">{up_to}</th>
                <th className="px-2 lg:px-6 font-[500] text-[14px] lg:text-[20px] text-[var(--text)] border-l border-r border-[var(--text)]">{up_to}</th>
                <th className="px-2 lg:px-6 font-[500] text-[14px] lg:text-[20px] text-[var(--text)]">{up_to}</th>
              </tr>

              <tr>
                <th className="px-2 lg:px-6 font-[600] text-[20px] sm:text-[25px] lg:text-[35px] text-[var(--text)] py-2">{range}</th>
                <th className="px-2 lg:px-6 font-[600] text-[20px] sm:text-[25px] lg:text-[35px] text-[var(--text)] border-l border-r border-[var(--text)] py-2">{flightTime}</th>
                <th className="px-2 lg:px-6 font-[600] text-[20px] sm:text-[25px] lg:text-[35px] text-[var(--text)] py-2">{weight}</th>
              </tr>

              <tr className="">
                <th className="px-2 lg:px-6 font-[500] text-[12px] lg:text-[18px] text-[var(--text)]">{range_title}</th>
                <th className="px-2 lg:px-6 font-[500] text-[12px] lg:text-[18px] text-[var(--text)] border-l border-r border-[var(--text)]">{flight_time_title}</th>
                <th className="px-2 lg:px-6 font-[500] text-[12px] lg:text-[18px] text-[var(--text)]">{weight_title}</th>
              </tr>
            </thead>
          </table>
        </div>

      </div>
    </div>
  );
};
export default PageTopbar