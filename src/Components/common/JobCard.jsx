import React from 'react'
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job}) => {
   const navigate = useNavigate();
     return (
        <div className="card p-6 shadow-sm hover:shadow-lg transition-all flex flex-col h-full">
            <div className="fade-up flex-grow space-y-4">
                <div className="flex flex-wrap gap-3 justify-start">
                    {/* Experience  */}
                    <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-2 py-1 rounded-full text-[12px] font-bold uppercase tracking-wide">
                        <i class="fa-solid fa-business-time"></i>
                        {job.experience}
                    </span>

                    {/* Location  */}
                    <span className="flex items-center gap-2 bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-[12px] font-bold">
                        <i class="fa-solid fa-location-dot"></i>
                        {job.location}
                    </span>

                    {/* Employment Type */}
                    <span className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-2 py-1 rounded-full text-[12px] font-bold">
                        <i class="fa-solid fa-briefcase"></i> 
                        {job.employmenttype} 
                    </span>
                </div>
                
                <h3 className="primary-heading text-[25px]">{job.title}</h3>
                <p className="text-[16px] text-[var(--text-secondary)] line-clamp-3 mb-4">{job.description}</p>
                <button  onClick={() => navigate(`/career/${job.id}`)} className="font-[500] text-[16px] text-[var(--text)] md:text-[18px] lg:text-[20px] underline">
                        View Details
                        
                </button>
            </div>
        </div>
     );
}

export default JobCard


