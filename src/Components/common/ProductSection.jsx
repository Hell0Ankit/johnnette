import Button from "./Button"


const ProductSection = ({ title, description, image,btntext, link}) => {
  return (
        <div className=' body-container hero flex flex-wrap justify-between items-center flex-col-reverse lg:flex-row'>
            <div className="fade-left hero_left w-[100%] lg:w-[40%]">
                <div className="wrap-hero-box space-y-6 text-center lg:text-left">
                    <h2 className='primary-heading'> {title}</h2>
                    <p className='text-[18px] md:text-[25px]'> 
                    {description}
                    </p>
                    <Button btntext={btntext} link={link} />
                </div>
            </div>
            <div className=" hero_right w-[100%] lg:w-[60%]">
                <img src={image} alt={title} fetchPriority="high" loading="eager" className='image-reveal w-full h-auto object-contain drop-shadow-2xl brightness-150 contrast-105 saturate-110' />
            </div>
        </div>
       )
    }
export default ProductSection

