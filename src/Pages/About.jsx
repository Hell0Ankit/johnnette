// Import Common Components 
import Layout from "../Components/Layout";
import BoardOfDirectors from "../Components/common/BoardOfDirectors";
import PageTopBarImage from "../Components/common/PageTopBarImage";

// Import Images 
import DesktopBannerImg from "../assets/img/about/top-banner_2.webp";

// import icons 
import mission from "../assets/img/icons/about_icon/mission.png";
import vision from "../assets/img/icons/about_icon/vision.png";

const About = () => {
  return (
     <Layout title="About | Johnnette Technologies">
        <section className="section-custom">
            <PageTopBarImage
                title="Making Impossible Possible"
                bgImage={DesktopBannerImg}
            />
        </section>
        <section className="section-custom py-8">
            <div className="body-container space-y-7  p-8">
                <div className="body-container w-[100%] lg:w-[80%] flex flex-col justify-center items-center py-8">
                    <p className="text-center text-[20px] md:text-[22px] lg:text-[25px] ">Established in 2014, Johnnette Technologies has been dedicated to delivering advanced aerospace systems to Indian Armed Forces, Paramilitary, and our Commercial clients. Our primary goal is to enhance our solutions continuously and ensure that they align with all the dynamic needs of the industry.</p>
                </div>
                <div className="w-[100%] lg:w-[80%] mx-auto info flex flex-wrap gap-5 mt-10">
                    <div className="card for-box w-full lg:w-[calc(50%-20px)] text-center p-6 space-y-5">
                        <img src={vision} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[25px] md:text-[30px] lg:text-[35px] font-bold font-expanded leading-none ">
                            VISION
                        </h2>
                        <p className="text-center text-[18px] md:text-[20px] lg:text-[22px]">To be the global leader in efficiently solving our customers' requirements in the Defence and Aerospace industry.</p>
                    </div>                                                                          
                    <div className="card for-box w-full lg:w-[calc(50%-20px)] text-center p-6 space-y-5">
                        <img src={mission} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[25px] md:text-[30px] lg:text-[35px] font-bold font-expanded leading-none ">
                            MISSION 
                        </h2>
                        <p className="text-center text-[18px] md:text-[20px] lg:text-[22px]">To deliver customized high quality products with state-of-the-art technology for enhancing and empowering our customers needs.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="section-custom py-8">
            <div className="body-container space-y-7  ">
              <BoardOfDirectors />
            </div>
        </section>
    </Layout>
  )
}
export default About