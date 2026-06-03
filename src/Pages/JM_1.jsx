// Import All Components
import Layout from '../Components/Layout';
import BeforeAfterSlider from '../Components/common/BeforeAfterSlider';
import DroneDescription from '../Components/common/DroneDescription';
import JM1Slider from '../Components/common/JM1Slider';
import PageVideoTopbar from '../Components/common/PageVideoTopbar';
import ImagesCarousel from '../Components/common/ImagesCarousel';
import SectionHeading from '../Components/common/SectionHeading';
import ProjectVideo from '../Components/common/ProjectVideo';


// Import all videos/Media 
import JM1_banner from '../assets/video/JM1/JM1_banner.mp4'
import JF2_Bottom from '../assets/video/JF2/JF2.mp4';

// Import Wire_Frame images 
import JM1_img from '../assets/img/JM1/JM1_img.png'
import JM1_wire_frame from '../assets/img/JM1/JM1_wire_frame.png'

// Import images for  ImagesCarousel slider 
import slide_1 from "../assets/img/JM1/ImagesCarousel/JM1_slide_1.webp";
import slide_2 from "../assets/img/JM1/ImagesCarousel/JM1_slide_2.webp";
import slide_3 from "../assets/img/JM1/ImagesCarousel/JM1_slide_3.webp";
import slide_4 from "../assets/img/JM1/ImagesCarousel/JM1_slide_4.webp";
import slide_5 from "../assets/img/JM1/ImagesCarousel/JM1_slide_5.webp";
import slide_6 from "../assets/img/JM1/ImagesCarousel/JM1_slide_6.webp";
import slide_7 from "../assets/img/JM1/ImagesCarousel/JM1_slide_7.webp";
import slide_8 from "../assets/img/JM1/ImagesCarousel/JM1_slide_8.webp";
import slide_9 from "../assets/img/JM1/ImagesCarousel/JM1_slide_9.webp";
import AskDemo from '../Components/common/AskDemo';

import { useGSAP } from "@gsap/react";
import { initAnimations } from "../animations/animation.js";


const JM1_imgs = [
    {src: slide_1 },
    {src: slide_2 },
    {src: slide_3 },
    {src: slide_4 },
    {src: slide_5 },
    {src: slide_6 },
    {src: slide_7 },
    {src: slide_8 },
    {src: slide_9 },

]

const JM_1 = () => {
      useGSAP(() => {
          initAnimations();
        })
  return (
    <Layout title="JM-1 | Johnnette Technologies">
        <section className="section-custom">
            <PageVideoTopbar
                bgVideo={JM1_banner} 
                title="Johnnette JM-1"
                up_to="Up to"
                range="05 km"
                flightTime="20 min"
                weight="3.8 kg"
                range_title="Operational Range"
                flight_time_title="Flight Time"
                weight_title="Aircraft Weight"
            />
        </section>

        <section className="section-custom ">
            <DroneDescription
            title="Johnnette JM-1"
            description=" The JM-1 loitering munition is a fire and forget system designed for autonomous missions,
                            enabling forces to deploy it by inputting specific latitude and longitude coordinates. It is
                            equipped with a 500-
                            gram warhead and can be directed by the operator to strike the designated target as
                            programmed into the mission planning software, thereby enhancing the operational
                            effectiveness of the Armed Forces. The JM-1
                            is configured for autonomous missions and is employed in both anti-personnel and
                            anti-material operations. This system can be launched using a pneumatic cannister or by hand
                            as required."
            />
        </section>

        <section className="section-custom ">
            <div className="body-container w-full">
              <JM1Slider />
            </div>
        </section>

        <section className="section-custom">
            <BeforeAfterSlider
                beforeImage={JM1_wire_frame} 
                afterImage={JM1_img}
            />
        </section>


        <section className="section-custom">
            <div className="body-container">

            <ProjectVideo
                videoSrc={JF2_Bottom} 
                // thumbnail={posterImg} 
                title="Making Impossible Possible" 
            />
            </div>
        </section>

        <section className="section-custom py-3">
                <div className="body-container">
                <SectionHeading title="JM1 READY FOR ACTION " />

                <ImagesCarousel images={JM1_imgs}
                />
                </div>
        </section>

       <section className="section-custom py-3">
                <AskDemo/>
        </section>


    </Layout>
  )
}

export default JM_1