import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Import Data 
import { jobsData } from '../../data/jobsData';

// Import Common Components 
import Layout from '../../Components/Layout'
import PageTopBarImage from '../../Components/common/PageTopBarImage';

// Import Images 
import hiring from "../../assets/img/career/hiring.webp";


const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const job = jobsData.find(j => j.id === id);

  if (!job) return <div className="p-10">Job Not Found</div>;

  return (
    <Layout title="Career Details | Johnnette Technologies">

        <section className="section-custom">
          <PageTopBarImage
              title="We are hiring!"
              bgImage={hiring}  
          />
        </section>
        <section className="section-custom p-6">
            <div className="body-container card hero p-6 lg:p-12">
                <div className="wrap-hero-box space-y-6">
                    <button onClick={() => navigate(-1)} className="font-[500] text-[18px] text-[var(--text)] md:text-[20px] lg:text-[25px]  hover:underline">
                        <i class="fa-solid fa-arrow-left-long"></i>  Back to All Jobs
                    </button>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3 justify-start">
                        {/* Experience  */}
                        <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
                            <i class="fa-solid fa-business-time"></i>
                            {job.experience}
                        </span>

                        {/* Location  */}
                        <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-4 py-1 rounded-full text-sm font-medium">
                           <i class="fa-solid fa-location-dot"></i>
                            {job.location}
                        </span>

                        {/* Employment Type */}
                        <span className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium">
                            <i class="fa-solid fa-briefcase"></i> 
                            {job.employmenttype} 
                        </span>
                    </div>

                    {/* Job Title */}
                    <h2 className="primary-heading leading-tight"> {job.title} </h2>

                    {/* Job Description */}
                    <p className="text-[16px] text-[var(--text-secondary)]"> {job.description} </p>

                    {/* Roles */}
                    <div className="relative pb-2">
                        <h2 className="font-[500] text-[20px] text-[var(--text)] lg:text-[25px]">
                            Roles and Responsibilities:
                        </h2>
                        {/* Border as a separate line */}
                        <div className="absolute bottom-0 left-0 h-[2px] w-[20%] md:[10%] lg:[8%] bg-[var(--brand-color)]"></div>
                    </div>

                    <div className="space-y-8">
                        <div className="list">
                            <ul className="list-disc pl-5 space-y-2 text-left text-[var(--text-secondary)]">
                                {job.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        {/* Skills */}
                        <div className="relative pb-2">
                            <h2 className="font-[500] text-[20px] text-[var(--text)] lg:text-[25px]">
                                Desired Skills:
                            </h2>
                            {/* Border as a separate line */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-[15%] md:[10%] lg:[8%] bg-[var(--brand-color)]"></div>
                        </div>
                        <div className="list">
                            <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)] text-left">
                                {job.skills.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </div>
                        <div className="meta-data space-y-2">
                            <p className="text-[18px] ">Qualification: <span className="text-[16px] text-[var(--text-secondary)]"> {job.qualification}</span> </p>
                            <p className="text-[18px] ">Number of openings: <span className="text-[16px] text-[var(--text-secondary)]"> {job.openings}</span> </p>
                            <p className="text-[18px] ">Email Your Resume: <span className="text-[16px] text-[var(--text-secondary)]"> <a href={`mailto:${job.email}`} className="underline">{job.email}</a> </span>  </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  );
};

export default JobDetail;