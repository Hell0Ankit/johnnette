import React from 'react';
// Import Data 
import { jobsData } from '../../data/jobsData';

// Import Common Components 
import Layout from '../../Components/Layout';
import PageTopBarImage from '../../Components/common/PageTopBarImage';
import SectionHeading from '../../Components/common/SectionHeading';
import JobCard from '../../Components/common/JobCard';

// Import Images 
import hiring from "../../assets/img/career/hiring.webp";

// Import icons 
import flexible from "../../assets/img/icons/career_icons/flexible-hours.png";
import growth from "../../assets/img/icons/career_icons/growth-opportunities.png";
import inclusive from "../../assets/img/icons/career_icons/inclusive-culture.png";
import leadership from "../../assets/img/icons/career_icons/leadership_opportunities.png";
import latest from "../../assets/img/icons/career_icons/latest-technology.png";
import team from "../../assets/img/icons/career_icons/team-building.png";


const Career = () => {
  return (
    <Layout title="Career | Johnnette Technologies">
        <section className="section-custom">
          <PageTopBarImage
              title="We are hiring!"
              bgImage={hiring}  
          />
        </section>
        
        <section className="section-custom p-4 py-6">
               <SectionHeading title="Current Job Opportunities" />
            <div className="body-container space-y-7 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {jobsData.map(job => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </div>
        </section>

        <section className="section-custom p-4 py-6">
            <SectionHeading title="Become a Part of our team" />
            <div className="body-container text-center  ">
                <div className="max-w-[70%] mx-auto text-center">
                       <p className="text-gray-400 text-lg leading-relaxed mb-16">
                        Become a part of our innovative team building open-source, cloud-native solutions.
                        We are a passionate and growth-driven company focused on creating scalable and modern
                         technologies with a strong engineering culture and collaborative environment.
                    </p>
                </div>
                <div className=" rounded-3xl overflow-hidden shadow-2xl">
                <img 
                    src={hiring} 
                    className="zoom-in" 
                    />
                </div>
            </div>
        </section>

         <section className="section-custom p-4 py-6">
               <SectionHeading title="Why Should You Join Us?" />
            <div className="body-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                        <div className="flex-grow space-y-4">
                            <img src={flexible} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Flexible Hours </h3>
                            <p className="text-[16px] text-[var(--text-secondary)]  mb-4">Work where you want, when you want, while also collaborating easily and freely to manage your time as you want.</p>
                        </div>
                    </div>

                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                        <div className="flex-grow space-y-4">
                            <img src={growth} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Growth Opportunities </h3>
                            <p className="text-[16px] text-[var(--text-secondary)] mb-4">Access clear career pathways, skill development programs, and continuous support to grow professionally and personally.</p>
                        </div>
                    </div>


                    
                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                        <div className="flex-grow space-y-4">
                            <img src={inclusive} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Inclusive Culture </h3>
                            <p className="text-[16px] text-[var(--text-secondary)] line-clamp-3 mb-4">Work in a friendly, diverse environment where every voice matters and everyone feels valued.</p>
                        </div>
                    </div>


               
                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">

                        <div className="flex-grow space-y-4">
                            <img src={leadership} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Leadership Opportunities </h3>
                            <p className="text-[16px] text-[var(--text-secondary)] line-clamp-3 mb-4">Step into roles that build confidence, responsibility, and ownership as you develop with the team.</p>
                        </div>
                    </div>
                    
                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">

                        <div className="flex-grow space-y-4">
                            <img src={latest} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Latest Technology</h3>
                            <p className="text-[16px] text-[var(--text-secondary)] line-clamp-3 mb-4">Work with modern tools, updated systems, and advanced technologies that enhance efficiency and performance daily.</p>
                        </div>
                    </div>

                    <div className="card  text-center px-4 py-10 flex flex-col h-full for-box">
                        <div className="flex-grow space-y-4 ">
                            <img src={team} alt="Total Drones & Robots Delivered" className="zoom-out block p-5 brightness-125 w-[70px] sm:w-[100px] h-auto rounded-full shadow-[0_0_25px_rgba(255,255,255,0.4)] mb-6 mx-auto" />
                            <h3 className="primary-heading text-[25px]"> Team Building </h3>
                            <p className="text-[16px] text-[var(--text-secondary)] line-clamp-3 mb-4">Experience fun activities, bonding events, and collaborative sessions that strengthen team culture and relationships.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Career