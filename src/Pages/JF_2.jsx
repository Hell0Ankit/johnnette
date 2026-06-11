// Import Common Components
import Layout from '../Components/Layout';
import BeforeAfterSlider from '../Components/common/BeforeAfterSlider';
import PageVideoTopbar from '../Components/common/PageVideoTopbar';
import ProjectVideo from '../Components/common/ProjectVideo';
import PayloadsTab from '../Components/common/PayloadsTab';
import JF2Slider from '../Components/common/JF2Slider';
import DroneDescription from '../Components/common/DroneDescription';
import ImagesCarousel from '../Components/common/ImagesCarousel';
import SectionHeading from '../Components/common/SectionHeading';

// Import images 
import JF2_img from '../assets/img/JF2/JF2_img.png';
import JF2_wire_frame from '../assets/img/JF2/JF2_wire_frame.png';
import crash from '../assets/img/JF2/crash.png';
import range  from '../assets/img/JF2/range.png';
import india  from '../assets/img/JF2/india.webp';
import rupee  from '../assets/img/JF2/rupee.png';

// Import images for  ImagesCarousel slider 
import slide_1 from "../assets/img/JF2/ImagesCarousel/JF2_slide_1.webp";
import slide_2 from "../assets/img/JF2/ImagesCarousel/JF2_slide_2.webp";
import slide_3 from "../assets/img/JF2/ImagesCarousel/JF2_slide_3.webp";
import slide_4 from "../assets/img/JF2/ImagesCarousel/JF2_slide_4.webp";
import slide_6 from "../assets/img/JF2/ImagesCarousel/JF2_slide_6.webp";
import slide_7 from "../assets/img/JF2/ImagesCarousel/JF2_slide_7.webp";

// Import images DayPayload
import DayPayload from '../assets/img/JF2/payload/day-payload.png'
import ThermalPayload from '../assets/img/JF2/payload/thermal-payload.png'

// Import  videos/Media 
import JF2_kakinada from '../assets/video/JF2/JF2_kakinada.mp4';
import JF2_Bottom from '../assets/video/JF2/JF2.mp4';
import AskDemo from '../Components/common/AskDemo';

import { useGSAP } from "@gsap/react";
import { initAnimations } from "../animations/animation.js";



const JF2_imgs = [
    {src: slide_1 },
    {src: slide_2 },
    {src: slide_3 },
    {src: slide_3 },
    {src: slide_4 },
    {src: slide_6 },
    {src: slide_7 },
]


const gimbalData = {
  day: {
    hardware: {
      specs: [
        { label: "Working Voltage", value: "12V" },
        { label: "Input Voltage", value: "3S ~ 6S" },
        { label: "Output voltage", value: "5V (connect with PWM)" },
        { label: "Operating Temperature", value: "-20° to 60° C" },
        { label: "Output", value: "micro HDMI(1080P 60fps) / IP (720P/1080P 25fps/30fps)" },
        { label: "Control method", value: "PWM / TTL / S.BUS / TCP(IP output version)" },
      ],
      image: DayPayload,
    },
    camera: {
      specs: [
        { label: "mager Sensor", value: "1/3 Panasonic CMOS Sensor" },
        { label: "Picture quality", value: "Full HD 1080 (1920x1080)" },
        { label: "Lens optical zoom", value: "10x" },
        { label: "Defog", value: "Yes" },
        { label: "Exposure", value: "Mode / AGC / Shut Speed / Iris / DSS / Flickerless / Brightness / WDR/BLC / D&N" },
      ],
      image: DayPayload,
    },
    tracking: {
      specs: [
        { label: "Update rate of deviation pixel", value: "50Hz" },
        { label: "Output delay of deviation pixel", value: "< 10ms" },
        { label: "Minimum object contrast", value: "5%" },
        { label: "SNR", value: "4" },
        { label: "Minimum object size", value: "32x32 pixel" },
        { label: "Maximum object size", value: "128x128 pixel" },
        { label: "Tracking speed", value: "±48 ~ ±192 pixel/frame" },
      ],
      image: DayPayload,
    }
  },
  thermal: {
    hardware: {
      specs: [
        { label: "Working voltage", value: "12V" },
        { label: "Input voltage", value: "3S ~ 6S" },
        { label: "Dynamic current", value: "500mA @ 12V" },
        { label: "Idle current", value: "-20° to 60° C" },
        { label: "Output", value: "micro HDMI(1080P 60fps) / AV" },
        { label: "Control method", value: "PWM / TTL / S.BUS" },
      ],
      image: ThermalPayload,
    },
    camera: {
      specs: [
        { label: "Lens size", value: "19mm" },
        { label: "Picture quality", value: "Full HD 1080 (1920x1080)" },
        { label: "Digital zoom", value: "1x-4x" },
        { label: "Working mode", value: "Uncooled long wave (8μm~14μm) thermal imager" },
        { label: "Detector pixel", value: "640x480" },
        { label: "Color palette", value: "White, iron red, pseudo color" },
      ],
      image: ThermalPayload,
    },
    tracking: {
      specs: [
        { label: "Detective Distance (Man: 1.8x0.5m)", value: "559 meters" },
        { label: "Recognize Distance (Man: 1.8x0.5m)", value: "140 meters" },
        { label: "Verified Distance (Man: 1.8x0.5m)", value: "70 meters" },
        { label: "Detective Distance (Car: 4.2x1.8m)", value: "1714 meters" },
        { label: "Recognize Distance (Car: 4.2x1.8m)", value: "428 meters" },
        { label: "Verified Distance (Car: 4.2x1.8m)", value: "214 meters" },
        { label: "Thermometry type", value: "Temperature bar (psudo color display) max temp, min temp, FOV center temp (Optional)" },
      ],
      image: ThermalPayload,
    }
  }
};

const JF_2 = () => {
     useGSAP(() => {
      initAnimations();
    })
    return (
        <Layout title="JF-2 | Johnnette Technologies" >
            <section className="section-custom">
                <PageVideoTopbar
                    bgVideo={JF2_kakinada} 
                    title="Johnnette JF-2"
                    up_to="Up to"
                    range="10 km"
                    flightTime="60 min"
                    weight="5 kg"
                    range_title="Operational Range"
                    flight_time_title="Flight Time"
                    weight_title="Aircraft Weight"
                />
            </section>

            <section className="section-custom ">
                <DroneDescription
                    title="Johnnette JF-2"
                    description="   The JF-2 features a wingspan of 2.2
                            meters, granting it an avian-like appearance and
                            facilitating effective radar camouflage due to its
                            construction from EPP and composite materials. Beyond
                            a distance of 100 meters, the aircraft's aural signature
                            becomes almost imperceptible, rendering it an excellent
                            choice for stealth operations both during the day and at
                            night. Additionally, its crash-resistant avionics bay
                            makes it an optimal solution for land forces.
                        
                            The JF-2 is adept at conducting Intelligence, Surveillance, and Reconnaissance (ISR)
                            activities, equipped with a high-definition camera and a thermal imaging camera,
                            making it suitable for operations in both daylight and night time conditions. This system
                            can be effectively deployed using hand launch mechanism."
                />
            </section>

            <section className="section-custom">
                <div className="body-container">
                <JF2Slider />
                </div>
            </section>

            <section className="section-custom">
                <BeforeAfterSlider
                    beforeImage={JF2_wire_frame} 
                    afterImage={JF2_img}
                />
            </section>

          <section className="section-custom p-4 py-6">
              <SectionHeading title="Core Advantages" />
                <div className="body-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                            <div className="flex-grow space-y-4">
                                <img src={crash} alt="Total Drones & Robots Delivered" className="zoom-in block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                                <h3 className="primary-heading text-[25px]"> Crash Resistant </h3>
                            </div>
                        </div>

                        <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                            <div className="flex-grow space-y-4">
                                <img src={range} alt="Total Drones & Robots Delivered" className="zoom-in block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                                <h3 className="primary-heading text-[25px]"> Long range & endurance </h3>
                            </div>
                        </div>

                        <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                            <div className="flex-grow space-y-4">
                                <img src={india} alt="Total Drones & Robots Delivered" className="zoom-in block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                                <h3 className="primary-heading text-[25px]"> 90% Made In India </h3>
                            </div>
                        </div>

                        <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                            <div className="flex-grow space-y-4">
                                <img src={rupee} alt="Total Drones & Robots Delivered" className="zoom-in block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                                <h3 className="primary-heading text-[25px]"> Affordable </h3>
                            </div>
                        </div>
                    </div>
                </div>
          </section>

            <section className="section-custom">
                <div className="body-container">
                <ProjectVideo
                    videoSrc={JF2_Bottom} 
                    title="Making Impossible Possible" 
                />
                </div>
            </section>

            <section className="section-custom">
                <div className="body-container">
                {/* <SectionHeading title="PAYLOADS"/> */}
                <PayloadsTab title="Model Alpha Series" data={gimbalData} />
                </div>
            </section>

            <section className="section-custom py-3">
                <div className="body-container">
                <SectionHeading title="JF-2 READY FOR ACTION " />
                <ImagesCarousel images={JF2_imgs}
                />
                </div>
            </section>
            
          <section className="section-custom py-3">
                <AskDemo/>
        </section>
    </Layout>
  )
}
export default JF_2;

