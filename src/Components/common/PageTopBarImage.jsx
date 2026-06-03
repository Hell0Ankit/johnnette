const PageTopBarImage = ({ bgImage,title }) => {
  return (
    <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden flex flex-col">
        <div className="relative top-0 left-0 w-full h-full ">
            <img 
            src={bgImage} 
            alt={title}
            className="w-full h-full object-cover"
            />
        </div>

        <div className=" fade-up absolute inset-0 z-10 flex flex-col justify-center items-center text-[var(--text)] text-center px-4 py-[50px] md:bg-transparent">
            <h2 className="text-[25px] sm:text-[35px] lg:text-[55px] uppercase font-[600] mb-6"> 
            {title} 
            </h2>
        </div>
    </div>
  )
}

export default PageTopBarImage
