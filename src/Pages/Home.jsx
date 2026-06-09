// import common Components  
import Layout from '../Components/Layout';
import ProductSection from '../Components/common/ProductSection';
import Counter from '../Components/common/Counter';
import SectionHeading from '../Components/common/SectionHeading';
import ProjectVideo from '../Components/common/ProjectVideo';

// Import images
import JF4ImgHero from "../assets/img/JF4/JF4_hero.webp";
import JF2ImgHero from "../assets/img/JF2/JF2_hero.webp";
import JM1ImgHero from "../assets/img/JM1/JM1_Hero.webp";

// import icons 
import delivered from "../assets/img/icons/delivered.png";
import worldwide from "../assets/img/icons/worldwide.png";
import pilots from "../assets/img/icons/pilots.png";
import government from "../assets/img/icons/government.png";

// import Videos 
import VDHome from "../assets/video/home/home.mp4";


import { useGSAP } from "@gsap/react";
import { initAnimations } from "../animations/animation.js";




const Home = () => {
useGSAP(() => {
    initAnimations();
  })
  return (
    <Layout title="Home | Johnnette Technologies">
        <section className="section-custom ">
            <ProductSection 
                title="JOHNNETTE JF-4"
                description="Johnnette JF-4 is a Medium Altitude Long Endurance strategic Unmanned Combat Aerial Vehicle (UCAV) capable of conducting operations that are performed with fighter jets."
                image={JF4ImgHero}
                btntext="Know More"
                link="/jf4"
            />
        </section>

        <section className="section-custom">
            <ProductSection 
                title="JOHNNETTE JF-2"
                description="Johnnette JF-2 is ideal for low-altitude Intelligence, Surveillance, and Reconnaissance missions that depend on rapid deployment and pinpoint manoeuvrability."
                image={JF2ImgHero}
                btntext="Know More"
                link="/jf2" 
            />
        </section>

        <section className="section-custom">
            <ProductSection 
                title="JOHNNETTE JM-1"
                description="Johnnette JM-1 will be a state-of-the-art purpose-built Loitering Munition (LM) that can be used for aerial surveillance and target neutralisation by Land and Naval forces."
                image={JM1ImgHero}
                btntext="Know More"
                link="/jm1"
            />
        </section>

        <section className=" section-custom py-16">
            <SectionHeading title="DELIVERING EXCELLENCE" />
                <div className="zoom-in body-container flex flex-wrap justify-center items-center  gap-4 md:gap-2 lg:gap-4 xl:gap-6 mt-10">
                    <div className="card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-26.6px)] xl:w-[calc(25%-30px)] text-center p-6 space-y-5 for-box">
                        <img src={delivered} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[30px] md:text-[35px] lg:text-[50px] font-bold font-expanded leading-none ">
                            <Counter end={347} />
                        </h2>
                        <p className="text-center text-[20px] md:text-[22px] lg:text-[25px]">Total Drones & <br/> Robots Delivered </p>
                    </div>

                    <div className="card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-26.6px)] xl:w-[calc(25%-30px)] text-center p-6 space-y-5 for-box">
                        <img src={worldwide} alt="Drone Unit" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[30px] md:text-[35px] lg:text-[50px] font-bold font-expanded leading-none ">
                            <Counter end={7} />
                        </h2>
                        <p className="text-center text-[20px] md:text-[22px] lg:text-[25px]">Worldwide  <br /> Presence </p>
                    </div>

                    <div className="card  w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-26.6px)] xl:w-[calc(25%-30px)] text-center p-6 space-y-5 for-box">
                        <img src={pilots} alt="Drone Unit" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[30px] md:text-[35px] lg:text-[50px] font-bold font-expanded leading-none ">
                            <Counter end={3500} />
                        </h2>
                        <p className="text-center text-[20px] md:text-[22px] lg:text-[25px]">Global Drone  <br /> Pilots Trained </p>
                    </div>

                    <div className="card w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-26.6px)] xl:w-[calc(25%-30px)] text-center p-6 space-y-5 for-box">
                        <img src={government} alt="Drone Unit" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                        <h2 className="text-center text-[30px] md:text-[35px] lg:text-[50px] font-bold font-expanded leading-none ">
                            <Counter end={44} />
                        </h2>
                        <p className="text-center text-[20px] md:text-[22px] lg:text-[25px]">Government  <br/> Contracts </p>
                    </div>
                </div>
        </section>

        <section className="section-custom">
            <div className="body-container">
            <ProjectVideo
            videoSrc={VDHome} 
            // thumbnail={posterImg} 
            title="Making Impossible Possible" 
            />

            </div>
        </section>

    </Layout>
  );
}

export default Home;

