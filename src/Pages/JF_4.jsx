// Import Common Components
import PageTopbar from '../Components/common/PageTopbar';
import Layout from '../Components/Layout';
import BeforeAfterSlider from '../Components/common/BeforeAfterSlider';
import JF4Slider from '../Components/common/JF4Slider';
import DroneDescription from '../Components/common/DroneDescription';
import AskDemo from '../Components/common/AskDemo';


// Import images 
import JF4TopImg from '../assets/img/JF4/JF4_top_banner.webp'
import after from '../assets/img/JF4/JF4_img.png'
import before from '../assets/img/JF4/JF4_wire_frame.png'

const JF_4 = () => {
  return (
    <Layout title="JF-4 | Johnnette Technologies">
        <section className="section-custom">
              <PageTopbar 
              bgImage={JF4TopImg}
              title="Johnnette JF-4"
              up_to=" Up to"

              range="350 km"
              flightTime="16 hours"
              weight="1800 kg"

              range_title="Operational Range"
              flight_time_title="Flight Time"
              weight_title="Aircraft Weight"
              />
        </section>

        <section className="section-custom ">
            <DroneDescription
            title="Johnnette JF-4"
            description="Johnnette JF-4 is a Medium Altitude Long Endurance strategic Unmanned Combat 
            Aerial Vehicle capable of conducting operations that are performed with fighter jets. Its unique design and speed increases
            its survivability in higher threat environments and provides customers with an expanded quick-response armed reconnaissance capability.

            Wide-area surveillance, time-sensitive strike missions over land or sea, and a host of other challenging military 
            missions can be performed with this highly advanced, next generation Remotely Piloted Aircraft.
            "
            />
        </section>

        <section className="section-custom">
            <div className="body-container">
              <JF4Slider />
            </div>
        </section>

        <section className="section-custom">
            <BeforeAfterSlider
                beforeImage={before} 
                afterImage={after}
            />
        </section>

         <section className="section-custom py-3">
                <AskDemo />
        </section>
    </Layout>
  )
}
export default JF_4