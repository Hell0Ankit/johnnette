const DroneDescription = ({title, description}) => {
  return (
    <div className="body-container w-[90%] lg:w-[60%] flex flex-col justify-center items-center py-8">
        <h2 className="fade-up text-[30px] sm:text-[55px] lg:text-[70px] uppercase font-[600] mb-6">{title}</h2>
        <p className="fade-up text-center text-[16px] lg:text-[20px] ">{description}</p>
    </div>
  )
}

export default DroneDescription